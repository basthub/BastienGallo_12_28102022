import styles from './cards.module.scss'
import iconapple from '../../assets/iconapple.svg'
import iconburger from '../../assets/iconburger.svg'
import iconchicken from '../../assets/iconchicken.svg'
import iconfire from '../../assets/iconfire.svg'
import PropTypes from 'prop-types'

const Cards = ({ value, type }) => {
  let icon,
    unitOfMeasurement,
    symbol = 'g'
  switch (type) {
    case 'calorie':
      icon = iconfire
      unitOfMeasurement = 'Calories'
      symbol = 'kCal'
      break
    case 'protein':
      icon = iconchicken
      unitOfMeasurement = 'Proteines'
      break
    case 'carbohydrate':
      icon = iconapple
      unitOfMeasurement = 'Glucides'
      break
    case 'lipid':
      icon = iconburger
      unitOfMeasurement = 'Lipides'
      break
    default:
      console.log('no case found')
  }

  return (
    <div className={styles.card}>
      <div className={styles.bgicon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.content}>
        <p className={styles.value}>
          {value}
          {symbol}
        </p>
        <p className={styles.type}>{unitOfMeasurement}</p>
      </div>
    </div>
  )
}

Cards.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}

export default Cards
