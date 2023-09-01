/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import style from './Home.module.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'd',
    'a',
    'n',
    'i',
    'e',
    'l',
    ' ',
    'F',
    'a',
    'b',
    'i',
    'a',
    'n',
    'i',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  return (
    <div className={`${style.homeContainer} ${style.homePage}`}>
      <div className={style.textZone}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
        </h1>
        <h1>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>FRONTEND DEVELOPER | JAVASCRIPT | FULLSTACK WEB</h2>
        <Link to="/contact" className={style.flatButton}>
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
