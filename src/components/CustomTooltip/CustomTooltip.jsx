import styles from './customtooltip.module.scss'
import PropTypes from 'prop-types'

const labelInTooltip = (payload) => {
  if (typeof payload[0].unit !== 'undefined') {
    return (
      <p style={{ textAlign: 'center' }}>
        {payload[0].value} {payload[0].unit}
      </p>
    )
  }
  if (payload && payload.length) {
    return payload.map((prop, id) => {
      return prop.dataKey === 'calories' ? (
        <li className="into__tooltip-list" key={id}>
          {prop.value}kCal
        </li>
      ) : (
        <li className="into__tooltip-list" key={id}>
          {prop.value}Kg
        </li>
      )
    })
  }

  return ''
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customtooltip}>
        <ul>{labelInTooltip(payload)}</ul>
      </div>
    )
  }

  return null
}
CustomTooltip.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.any),
}

export default CustomTooltip
