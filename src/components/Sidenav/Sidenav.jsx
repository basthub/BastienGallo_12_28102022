import styles from './sidenav.module.scss'
import iconmeditate from '../../assets/iconmeditate.svg'
import iconswim from '../../assets/iconswim.svg'
import iconbicycle from '../../assets/iconbicycle.svg'
import iconweight from '../../assets/iconweight.svg'
const Sidenav = () => {
  return (
    <div className={styles.sidebar}>
      <aside>
        <nav>
          <ul>
            <li>
              <img src={iconmeditate} alt="meditate" />
            </li>
            <li>
              <img src={iconswim} alt="swim" />
            </li>
            <li>
              <img src={iconbicycle} alt="cycle" />
            </li>
            <li>
              <img src={iconweight} alt="weight" />
            </li>
          </ul>
        </nav>
        <p>Copyright, SportSee {new Date().getFullYear()}</p>
      </aside>
    </div>
  )
}

export default Sidenav
