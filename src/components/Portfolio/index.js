import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  //   const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  //   useEffect(() => {
  //     getPortfolio()
  //   }, [])

  //   const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  const renderPortfolio = (portfolio) => {
    return (
      <div className='images-container'>
        {portfolio.map((port, idx) => {
          return (
            <div className='image-box' key={idx}>
              <img
                src={port.cover}
                className='portfolio-image'
                alt='portfolio'
              />
              <div className='content'>
                <p className='title'>{port.title}</p>
                <h4 className='description'>{port.description}</h4>
                <button className='btn' onClick={() => window.open(port.url)}>
                  Visa
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='page-title'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={10}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Portfolio
