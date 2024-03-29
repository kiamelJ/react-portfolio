import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rb86o9f',
        'template_kfubsae',
        form.current,
        'Mxg4xl9coLs15ayW5'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Kontakta mig'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Min utbildning till fullstack-utvecklare är klar i mitten av april
            och jag söker arbete främst som webb- och apputvecklare men även
            annat är av intresse.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </li>

                <li>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    required
                  />
                </li>
                <li>
                  <textarea
                    name='message'
                    placeholder='Message'
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Mikael Jonsson
          <br />
          Härbrevägen 42 <br />
          Örnsköldsvik <br />
          <span>kiamel76@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[63.31398, 18.76474]} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[63.31398, 18.76474]}>
              {/* <Popup>Mike lives here!</Popup> */}
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Contact
