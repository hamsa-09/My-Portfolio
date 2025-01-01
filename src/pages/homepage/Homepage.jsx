import React from 'react';
import "./Homepage.css"
import img from "../../assets/hamsa.jpg";

const Homepage = () => {
  return (
    <div className='home'>
        <div className="image">
            <img src={img} alt="image" />
        </div>
        <div className="text">
            <h4>Hey there!</h4>
            <h1>I'm HAMSAVARDHINI</h1>
            <h2>I am passionate Full Stack Developer</h2>
            <button>Download CV</button>
        </div>
        
    </div>
  )
}

export default Homepage
