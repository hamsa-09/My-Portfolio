import React,{useEffect} from 'react'
import "./ProjectCard.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
const ProjectCard = ({project,description,image,stack}) => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
  return (
    <div className="project-card" data-aos="fade-up">
        <img src={image} alt={project} />
        <div className='project-text'>
            <h3>{project}</h3>
            <p>{description}</p>
        </div>
        <div className='project-stack'>
            <p>Technology : {stack}</p>
        </div>
    </div>
  )
}

export default ProjectCard
