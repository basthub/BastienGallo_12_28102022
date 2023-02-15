import styles from './graphlinechart.module.scss'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
} from 'recharts'
import PropTypes from 'prop-types'

const GraphLineChart = (data) => {
  function handleFormatTick(numDay) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    // eslint-disable-next-line default-case
    switch (numDay) {
      case 1:
        return days[0]
      case 2:
        return days[1]
      case 3:
        return days[2]
      case 4:
        return days[3]
      case 5:
        return days[4]
      case 6:
        return days[5]
      case 7:
        return days[6]
    }
  }

  return (
    <div className={styles.linechart}>
      <p className={styles.linechart__title}>Durée moyenne des sessions</p>
      <ResponsiveContainer
        width="100%"
        height={263}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <LineChart
          data={data.data}
          style={{ background: 'red', borderRadius: '10px' }}
          width={258}
          height={235}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        >
          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ stroke: 'red', strokeWidth: 2, r: 3 }}
            unit={'min'}
            stroke={'#FFF'}
            strokeWidth={2}
          />
          <YAxis hide padding={{ top: 70, bottom: 0 }} />
          <XAxis
            dataKey="day"
            tickFormatter={handleFormatTick}
            axisLine={false}
            tickLine={false}
            padding={{ right: 20, left: 20 }}
            stroke={'#fff'}
            interval={'preserveStartEnd'}
          />
          <Tooltip
            wrapperStyle={{
              background: '#FFF',
              color: '#000',
              width: '39px',
              height: '25px',
            }}
            stroke={'#FFF'}
            dataKey="sessionLength"
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
GraphLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default GraphLineChart
