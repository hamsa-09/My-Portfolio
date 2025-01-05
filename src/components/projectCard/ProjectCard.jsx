import React from 'react'
import "./ProjectCard.css"
const ProjectCard = ({project,description,image}) => {
  return (
    <div className="project-card">
        <img src={image} alt={project} />
        <div className='project-text'>
            <h3>{project}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
