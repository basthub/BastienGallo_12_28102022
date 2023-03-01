import styles from './graphradialbarchart.module.scss'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import PropTypes from 'prop-types'

/**
 * Rechart Radialchart component
 * @param data -  Contain datas from the Api about user today score
 * @returns React element
 */

const GraphRadialBarChart = ({ data }) => {
  const datas = []
  datas.push(data)
  const dataValue = 360 * datas[0]
  const style = {
    background: '#fff',
    fill: 'red',
  }
  return (
    <div className={styles.radialchart}>
      <h3 className={styles.radialchart__title}>Score</h3>
      <div className={styles['radialchart__bloc-score']}>
        <p className={styles['radialchart__bloc-score__score']}>
          {datas[0] * 100}%
        </p>
        <span className={styles['radialchart__bloc-score__text']}>
          de votre objectif
        </span>
      </div>

      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="60%"
          outerRadius="80%"
          barSize={10}
          startAngle={90}
          endAngle={90 + -dataValue}
          data={datas}
          style={{ background: 'transparent' }}
        >
          <RadialBar
            background={{ fill: '#ff0000' }}
            dataKey={'todayScore'}
            style={style}
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

GraphRadialBarChart.propTypes = {
  todaySccore: PropTypes.number,
}
export default GraphRadialBarChart
