import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import WorksCarousel from '../WorksCarousel/WorksCarousel'
/* import worksData from '../../data/works.json' */


const Works = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])


  return (
    <>
      <div className="container works-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={'My works'.split('')}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <div className="carousel-container">
          <WorksCarousel />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Works
