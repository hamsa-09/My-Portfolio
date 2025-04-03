import React, { useEffect, useState } from 'react';
import "./ProjectCard.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, description,stack, images }) => {
    useEffect(() => {
        Aos.init({ duration:2000 });
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="project-card" data-aos="fade-down">
            <h3>{project}</h3>
            <div className='project-text'>
                <div className="image-slider">
                    <button className="arrow left" onClick={prevImage}><FaArrowLeft /></button>
                    <img src={images[currentIndex]} alt={project} />
                    <button className="arrow right" onClick={nextImage}><FaArrowRight /></button>
                </div>
            </div>
            <p>{description}</p>
            <div className='project-stack'>
                <p>Technology: {stack}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
