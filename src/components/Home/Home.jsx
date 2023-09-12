/* eslint-disable react/no-unescaped-entities */
import './index.scss';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo';
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    '',
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

  /* useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []) */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Función de limpieza para cancelar el timeout si el componente se desmonta
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
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
            idx={16}
          />
        </h1>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={23}
          />
        </h1>
        <h2>FRONTEND DEVELOPER | JAVASCRIPT | FULLSTACK WEB DEVELOPER</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
