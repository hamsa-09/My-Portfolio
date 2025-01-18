import React, { useEffect, useRef } from 'react';
import './Skillspage.css';
import SkillCard from "../../components/skillCard/SkillCard";
import img1 from "../../assets/java.png";

const Skillspage = () => {
    const skills = [
        { skill: 'Java', image: img1 },
        { skill: 'C language', image: img1 },
        { skill: 'HTML', image: img1 },
        { skill: 'CSS', image: img1 },
        { skill: 'JavaScript', image: img1 },
        { skill: 'React Js', image: img1 },
        { skill: 'Node Js', image: img1 },
        { skill: 'SpringBoot', image: img1 },
        { skill: 'MySQL', image: img1 },
        { skill: 'MongoDB', image: img1 },
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
