/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
/* import { DotButton, PrevButton, NextButton } from './CarouselButtons' */
import { DotButton } from './CarouselButtons';
import './WorksCarousel.css';
import worksData from '../../data/works.json';
import Autoplay from 'embla-carousel-autoplay';

const WorksCarousel = () => {
  const autoplayOptions = {
    delay: 3000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  };

  const options = {
    loop: true,
  };
  // Calcular SLIDE_COUNT en función de la longitud del array de imágenes
  const images = worksData.works.map((img) => img.cover)

  const slide_count = images.length
  const slides = Array.from(Array(slide_count).keys())

  const imageByIndex = (index) => images[index % images.length];

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  /* const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true) */
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  /* const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  ) */
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    /* setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext()) */
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {
              slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div>
                    <Link to={`/WorkDetail/${index}`}>
                      <img
                        className="embla__slide__img"
                        src={imageByIndex(index)}
                        alt="Work preview"
                      />
                    </Link>
                  </div>
              ))
            }
            
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
        {/* <div className="embla__buttons">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div> */}
      </div>
    </>
  )
}

export default WorksCarousel
