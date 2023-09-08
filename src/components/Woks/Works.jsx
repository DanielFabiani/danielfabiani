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

  /* const renderWorks = (works) => {
    return (
      <div className="images-container">
        {works.map((work, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={work.cover} alt="cover image" className="work-image" />
              <div className="content">
                <p className="title">{work.title}</p>
                <h4 className="description">{work.description}</h4>
                <button className="btn" onClick={() => window.open(work.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  } */

/*   const [emblaRef] = useEmblaCarousel({ loop: true }) */

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

        {/* <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              {
                worksData.works.map((work, idx) => {
                return (
                  <div className="image-box" key={idx}>
                    <img
                      src={work.cover}
                      alt="cover image"
                      className="work-image"
                    />
                    <div className="content">
                      <p className="title">{work.title}</p>
                      <h4 className="description">{work.description}</h4>
                      <button
                        className="btn"
                        onClick={() => window.open(work.url)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                )
                })
              }
            </div>
          </div>
        </div> */}
        {/* <div>{renderWorks(worksData.works)}</div> */}
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Works
