import styles from './graphradarchart.module.scss'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'

const GraphRadarChart = ({ data }) => {
  return (
    <div className={styles.radarchart}>
      <ResponsiveContainer width={'100%'} height={263}>
        <RadarChart outerRadius={75} data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            orient={30}
            style={{ color: '#fff' }}
            stroke={'#fff'}
            tickLine={false}
            radius={10}
            fontSize={12}
            strokeWidth={1}
          />
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

GraphRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GraphRadarChart
