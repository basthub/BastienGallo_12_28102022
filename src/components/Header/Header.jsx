import './header.module.scss'
import logo from '../../assets/logo.png'
/**
 * Return main navigation
 * @returns React component
 */

const Header = () => {
  return (
    <header>
      <img src={logo} alt="SportSee" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
