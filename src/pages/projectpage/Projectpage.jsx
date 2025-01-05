import React from 'react'
import "./Projectpage.css"
import img1 from "../../assets/java.png"
import ProjectCard from '../../components/projectCard/ProjectCard'
const Projectpage = () => {
    const projects=[
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
        {
            title:"Trasport permit",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image:img1,
        },
    ]
  return (

    <div className='project'>
        <h2>My Projects</h2>
         <div className="project-container">
            {projects.map((project,index)=>(
                <ProjectCard key={index} project={project.title} description={project.description} image={project.image} />
            ))}
         </div>
    </div>
  )
}

export default Projectpage
