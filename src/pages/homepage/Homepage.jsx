import React from 'react';
import "./Homepage.css"
import img from "../../assets/dp.png";

const Homepage = () => {
  return (
    <div className='home'>
        <div className="image">
            <img src={img} alt="image" />
        </div>
        <div className="text">
            <h3>Hey there!</h3>
            <h1>I'm HAMSAVARDHINI</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <button>Download CV</button>
        </div>

    </div>
  )
}

export default Homepage
