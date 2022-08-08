// import { isEditable } from '@testing-library/user-event/dist/utils'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>j,</span>
            <br />
            <span className={`${letterClass} _13`}>M</span>
            <span className={`${letterClass} _14`}>i</span>
            <span className={`${letterClass} _15`}>t</span>
            <span className={`${letterClass} _16`}>t</span>
            {/* <img
              src={LogoTitle}
              alt='JavaScript Developer Name, Web Developer Name'
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={' namn är'.split('')}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Mikael Jonsson'.split('')}
              idx={25}
            />
          </h1>
          <h2>Nånting här / Nåt mer här / Hitta på ytterligare?</h2>
          <Link to='/contact' className='flat-button'>
            KONTAKT
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Home
