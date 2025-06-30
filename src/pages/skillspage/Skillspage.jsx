import React, { useEffect, useRef } from 'react';
import './Skillspage.css';
import SkillCard from "../../components/skillCard/SkillCard";
import img1 from "../../assets/jv.png";
import img2 from "../../assets/c.png";
import img3 from "../../assets/figma.png";

const Skillspage = () => {
    const skills = [
        { skill: 'Java', image: img1 },
        { skill: 'C language', image: img2 },
        { skill: 'Figma', image: img3 },
        { skill: 'React Js', image:"https://images.seeklogo.com/logo-png/27/2/react-logo-png_seeklogo-273845.png" },
        { skill: 'Express Js', image: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp" },
        { skill: 'SpringBoot', image: "https://img.icons8.com/?size=512&id=90519&format=png"},
        { skill: 'MySQL', image: "https://img.icons8.com/m_rounded/512/FFFFFF/mysql-logo.png"},
        { skill: 'Github', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSy2PBuqJ-eP3UVb8Stv03TnfQkRHvKSb2Jw&s"},
    ];
    return (
        <div className="skill">
            <h2>Technical Skills</h2>
            <div className="skill-cards" >
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.skill} image={skill.image} />
                ))}
            </div>

        </div>
    );
};

export default Skillspage;
