/* eslint-disable react/no-unescaped-entities */
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xl3lz8v',
        'template_vmzngcu',
        refForm.current,
        '6xk7Qo-5Q6AF5xo1J'
      )
      .then(
        (result) => {
          alert('Your message was sent')
          window.location.reload(false)
          console.log(result.text)
        },
        (error) => {
          alert('your message was not sent')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm looking for opportunities to work in collaborative teams and
            continue growing in web development. Contact me, and let's
            collaborate together! 😊🚀
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Daniel Fabiani,
          <br />
          Buenos Aires, Argentina.
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:danielfabiani.dev@gmail.com"
          >
            danielfabiani.dev@gmail.com
          </a>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[-34.57795456528493, -58.42702381272691]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-34.57795456528493, -58.42702381272691]}>
              <Popup>
                <span className="custom-popup">
                Daniel lives somewhere around here. <br /> but i can work from anywhere.
                  </span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
