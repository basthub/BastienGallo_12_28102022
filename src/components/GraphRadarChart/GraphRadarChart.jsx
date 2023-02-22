import styles from './graphradarchart.module.scss'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Checking the data kind property to translate it to french
 * @param {Object} obj - object containing datas that need to be reformatted
 * @returns {Array} An array of objects
 */

function reformatData(obj) {
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = enToFr(obj.kind[key + 1])
      nbrKind.kind = frenchDatas
    }
    return nbrKind
  })
}

function enToFr(str) {
  const words = {
    energy: 'Énergie',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
    cardio: 'Cardio',
    endurance: 'Endurance',
  }
  return words[str]
}

/**
 * Rechart Radar chart element
 * @param data -  Contain datas from the Api about user performance
 * @returns React element
 */

const GraphRadarChart = ({ data }) => {
  const datas = reformatData(data)
  return (
    <div className={styles.radarchart}>
      <ResponsiveContainer width={'100%'} height={263}>
        <RadarChart outerRadius={75} data={datas}>
          <PolarGrid strokeWidth={1} stroke="white" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            type="category"
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
  data: PropTypes.object,
}

export default GraphRadarChart
