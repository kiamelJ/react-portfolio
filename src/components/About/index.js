import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Kort om mig'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Efter ett flertal år inom distribution med lönehantering och
            personalfrågor på mitt bord så sadlar jag om och är nu inne på mitt
            andra år på utbildningen Systemutvecklare.NET med AI-kompetens.
          </p>
          <p>
            Utbildningen innefattar bland annat C#, DevOps, JavaScript, React,
            ASP.NET, Designmönster och arkitektur, Programmering av databaser
            och SQL, Projektledning och Agil systemutveckling med SCRUM,
            AI-komponenter och ML i MS Azure.
          </p>
          <p>
            Även om den mesta tiden just nu går till studier så måste det även
            finnas tid för annat i livet och då är det familjen, träning och
            fotografering som gäller.
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            {/* <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div> */}
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            {/* <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div> */}
          </div>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default About
