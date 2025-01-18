import React from 'react'
import "./Projectpage.css"
import img1 from "../../assets/tp.png"
import ProjectCard from '../../components/projectCard/ProjectCard'
const Projectpage = () => {
    const projects=[
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:img1,
        },
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHmSlrGArBLNPBb140q5oOQhmgDTXcqVJeg&s",
        },
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHmSlrGArBLNPBb140q5oOQhmgDTXcqVJeg&s",
        },
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHmSlrGArBLNPBb140q5oOQhmgDTXcqVJeg&s",
        },
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHmSlrGArBLNPBb140q5oOQhmgDTXcqVJeg&s",
        },
        {
            title:"Transport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            stack:"React , Node.js, MongoDB",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRHmSlrGArBLNPBb140q5oOQhmgDTXcqVJeg&s",
        },
    ]
  return (

    <div className='project'>
        <h2>MY PROJECTS</h2>
         <div className="project-container">
            {projects.map((project,index)=>(
                <ProjectCard key={index} project={project.title} description={project.description} image={project.image} stack={project.stack} />
            ))}
         </div>
    </div>
  )
}

export default Projectpage
