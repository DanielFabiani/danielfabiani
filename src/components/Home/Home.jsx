/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={`${style.homeContainer} ${style.homePage}`}>
      <div className={style.textZone}>
        <h1>
          Hi, <br /> I'm Daniel Fabiani <br /> web developer
        </h1>
        <h2>
          FRONTEND DEVELOPER | JAVASCRIPT | FULLSTACK WEB
        </h2>
        <Link to="/contact" className={style.flatButton}>
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
