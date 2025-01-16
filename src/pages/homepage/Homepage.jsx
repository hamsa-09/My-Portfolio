import React, { useState, useEffect } from "react";
import "./Homepage.css";
import img from "../../assets/dp.png";
import cv from "../../assets/cv.pdf"; // The PDF you want to preview

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

  return (
    <div className="home">
      <div className="image">
        <img src={img} alt="Profile" />
      </div>
      <div className="text">
        <h3>Hey there!</h3>
        <h1>I'm HAMSAVARDHINI</h1>
        <p>
          Software developer seeking an opportunity to contribute to a
          challenging organization by applying my web development and
          programming skills to create innovative and efficient solutions for
          growth of the organization while leveraging my technical expertise.
        </p>
        <button onClick={openModal}>View CV</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe src={cv} title="CV Viewer" className="cv-viewer"></iframe>
            <a href={cv} download="Hamsavardhini_CV.pdf" className="download-button">
              Download CV
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
