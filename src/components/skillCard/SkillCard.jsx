import React from 'react';
import './SkillCard.css'; 

const SkillCard = ({ skill, image }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={skill} className="skill-card-image" />
      <p className="skill-card-title">{skill}</p>
    </div>
  );
};

export default SkillCard;
