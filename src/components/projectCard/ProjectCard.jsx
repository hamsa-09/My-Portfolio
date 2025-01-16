import React from 'react'
import "./ProjectCard.css"
const ProjectCard = ({project,description,image,stack}) => {
  return (
    <div className="project-card">
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
