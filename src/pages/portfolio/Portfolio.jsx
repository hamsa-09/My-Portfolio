import React, { useRef,useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Homepage from "../homepage/Homepage";
import Aboutpage from "../aboutpage/Aboutpage";
import Skillspage from "../skillspage/Skillspage";
import Projectpage from "../projectpage/Projectpage";
import Contactpage from "../contactpage/Contactpage";
import "./Portfolio.css";
const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);




  return (
    <div className="portfolio">
      <NavBar
        refs={{
          home: homeRef,
          about: aboutRef,
          skills: skillsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <div ref={homeRef} className="section" ><Homepage /></div>
      <div ref={aboutRef} className="section" ><Aboutpage /></div>
      <div ref={skillsRef} className="section" ><Skillspage /></div>
      <div ref={projectsRef} className="section" ><Projectpage /></div>
      <div ref={contactRef} className="section" ><Contactpage /></div>
    </div>
  );
};

export default Portfolio;
