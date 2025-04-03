import React,{useState} from 'react'
import "./Projectpage.css"
import tw1 from "../../assets/T-W-1.png"
import tw2 from "../../assets/T-W-2.png"
import tw3 from "../../assets/T-W-3.png"
import tw4 from "../../assets/T-W-4.png"
import tw5 from "../../assets/T-W-5.png"
import p1 from "../../assets/P-2-1.png";
import p2 from "../../assets/P-2-2.png";
import p3 from "../../assets/P-2-3.png";
import s1 from "../../assets/P31.png";
import s2 from "../../assets/P32.png";
import s3 from "../../assets/P33.png";
import s4 from "../../assets/P34.png";
import s5 from "../../assets/P35.png";
import s6 from "../../assets/P36.png";
import s7 from "../../assets/P37.png";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/n2.png";
import ProjectCard from '../../components/projectCard/ProjectCard'
const Projectpage = () => {
    const projects=[
        {
            title:"Transport permit",
            description:"A user-friendly platform for applying and managing transport permits, streamlining the process for both applicants and authorities.",
            stack:"React Js,Node Js,Mongo DB,Rest API",
            image:tw1,
            images:[tw1,tw2,tw3,tw4,tw5],
        },
        {
            title:"Disaster Relief Coordination",
            description:"  An efficient system for coordinating disaster relief efforts, ensuring quick response and resource allocation during emergencies.",
            stack:"React , Node.js, MongoDB",
            image:p2,
            images: [p1,p2,p3],
        },
        {
            title:"Project Title selection portal",
            description:"A portal for registration of project title by students and getting approval from guide to proceed with selected project.",
            stack:"React JS, NodeJS and Express JS , MongoDB and Rest API",
            image:s1,
            images: [s1,s2,s3,s4,s5,s6,s7],
        },
        {
            title:"Titasker",
            description:"Users can create ,view ,update and delete the tasks-task manager.",
            stack:"React JS ,SpringBoot ,MySql",
            image:n1,
            images: [n1,n2],
        },
       ]

return (
        <div className='project'>
            <h2>MY PROJECTS</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    project={project.title}
                    description={project.description}
                    image={project.image}
                    stack={project.stack}
                    images={project.images} // Pass the images array
                />

                ))}
            </div>

        </div>
    );
};

export default Projectpage;
