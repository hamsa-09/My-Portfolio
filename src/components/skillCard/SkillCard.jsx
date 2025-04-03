import React,{useEffect} from 'react';
import './SkillCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const SkillCard = ({ skill, image }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <div className="skill-card" data-aos="fade-bottom">
      <img src={image} alt={skill} className="skill-card-image" />
      <p className="skill-card-title">{skill}</p>
    </div>
  );
};

export default SkillCard;
