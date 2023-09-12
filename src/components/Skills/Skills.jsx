/* eslint-disable react/no-unescaped-entities */
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { SiBootstrap, SiCss3, SiExpress, SiFigma, SiHtml5, SiJavascript, SiJira, SiMaterialdesign, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiSequelize, SiTailwindcss, SiTypescript } from 'react-icons/si'
import zustand1 from '../../assets/icons/zuztand1.png'

const Skills = () => {
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
      <div className="container skills-page">
        <div className="info-container">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={'My skills'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <div className="skills-container">
            <p>
              I bring valuable skills such as good teamwork, resilience in the
              face of challenges, effective communication, organization and
              empathy. At the same time, I dedicate myself to study and learn
              more and more about web development, making sure to be aware of
              the latest trends and tools.
            </p>
            <p>
              I focus my professional path on technology and I commit myself to
              constant growth. I like to create innovative and accessible
              applications for the global audience.
            </p>
            <p>
              This passion for learning and adaptability fuels my desire to
              collaborate on projects that have a positive impact on people’s
              lives through technology. I am looking for the opportunity to
              collaborate in the development of an application that has a
              positive impact on people, and then observe how they use and enjoy
              it.
            </p>
          </div>
        </div>
        <div className="icons-container">
          <ul className="icon-list">
            <li>{<SiJavascript size={46} color="#FFB703" />}</li>
            <li>{<SiTypescript size={46} color="#2D79C7" />}</li>
            <li>{<SiReact size={46} color="#60DBFB" />}</li>
            <li>{<SiRedux size={46} color="#8A0AFB" />}</li>
            <li>{<SiNextdotjs size={46} color="#0d0c0c" />}</li>
            <li><img src={zustand1} alt="zustand logo" className='logo-zustand'/></li>
            <li>{<SiHtml5 size={46} color="#E44D26" />}</li>
            <li>{<SiCss3 size={46} color="#214CE4" />}</li>
            <li>{<SiTailwindcss size={46} color="#1BB2BB" />}</li>
            <li>{<SiBootstrap size={46} color="#8A0AFB" />}</li>
            <li>{<SiMaterialdesign size={46} color="#0d0c0c" />}</li>
            <li>{<SiFigma size={44} color="#fff" />}</li>
            <li>{<SiJira size={44} color="#2E88FF" />}</li>
            <li>{<SiNodedotjs size={44} color="#86CF33" />}</li>
            <li>{<SiExpress size={46} color="#0d0c0c" />}</li>
            <li>{<SiSequelize size={46} color="#20B1EF" />}</li>
            <li>{<SiPostgresql size={46} color="#376696" />}</li>
          </ul>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
