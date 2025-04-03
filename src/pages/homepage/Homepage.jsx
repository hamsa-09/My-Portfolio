import React, { useState, useEffect } from "react";
import "./Homepage.css";
import img from "../../assets/dp.png";
import cv from "../../assets/Hamsa_Resume.pdf";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);


  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);

  return (
    <div className="home">
      <div className="image" data-aos="fade-up">
        <img src={img} alt="Profile" />
      </div>
      <div className="text" data-aos="fade-up">
        <h3>Hey there!</h3>
        <h1>I'm HAMSAVARDHINI</h1>
        <p>
          Software developer seeking an opportunity to contribute to a
          challenging organization by applying my web development and
          programming skills to create innovative and efficient solutions for
          growth of the organization while leveraging my technical expertise.
        </p>
        <button onClick={openModal}>View Resume</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe src={cv} title="CV Viewer" className="cv-viewer"></iframe>
            <a href={cv} download="Hamsavardhini_CV.pdf" className="download-button">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
