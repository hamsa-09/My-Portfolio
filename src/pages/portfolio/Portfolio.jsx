import React from 'react'
import "./Portfolio.css"
import Homepage from '../homepage/Homepage'
import Aboutpage from '../aboutpage/Aboutpage'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='homepage'><Homepage/></div>
        <Aboutpage/>
    </div>
  )
}

export default Portfolio
