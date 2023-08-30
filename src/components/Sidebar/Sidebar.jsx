import { Link, NavLink } from 'react-router-dom'
import style from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faEnvelope,
  faGear,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className={style.navBar}>
      <Link className={style.logo} to="/">
        <h2>daniel</h2>
        <p>FABIANI</p>
      </Link>
      <nav>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? style.active : style.homeLink)}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#FFB703" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className={style.aboutLink}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#FFB703" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className={style.skillsLink}
          to="/skills"
        >
          <FontAwesomeIcon icon={faGear} color="#FFB703" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className={style.projectLink}
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#FFB703" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className={style.contactLink}
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#FFB703" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
