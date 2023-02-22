import styles from './graphbarchart.module.scss'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Rechart Barchart component
 * @param data -  Contain datas from the Api about user activity
 * @returns React element
 */
const GraphBarChart = ({ data }) => {
  return (
    <div className={styles.barchart__container}>
      <p className={styles.barchart__title}>Activité quotidienne</p>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey={'day'}
            axisLine={false}
            domain={['dataMin + 1', 'dataMax + 1']}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            interval={'preserveStartEnd'}
            axisLine={false}
            allowDecimals={false}
            dataKey={'kilogram'}
            yAxisId={1}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <YAxis hide dataKey={'calories'} yAxisId={2} />
          <Tooltip
            content={<CustomTooltip />}
            labelStyle={{
              display: 'none',
            }}
            wrapperStyle={{
              color: '#FFF',
              background: 'red',
              border: 'none',
              outline: 'none',
              width: '39px',
              height: '63px',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            height={40}
            verticalAlign="top"
            align="right"
            iconType={'circle'}
            style={{ margin: '1rem auto', width: '100px' }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282d30"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Poids (kg)'}
            yAxisId={1}
          />
          <Bar
            dataKey="calories"
            fill="#e60000"
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Calories brûlées (kCal)'}
            yAxisId={2}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

GraphBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
}
export default GraphBarChart
