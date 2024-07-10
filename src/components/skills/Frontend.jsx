import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';

const Frontend = () => {
  const frontendSkills = [
    { name: 'HTML', icon: faHtml5, level: 90 },
    { name: 'CSS', icon: faCss3Alt, level: 85 },
    { name: 'JavaScript', icon: faJsSquare, level: 80 },
    { name: 'Bootstrap', icon: faBootstrap, level: 75 },
    { name: 'React.js', icon: faReact, level: 70 },
  ];

  return (
    <div className="skills_section">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_container">
        {frontendSkills.map((skill, index) => (
          <div className="skills_card" key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skills_icon" />
            <h3 className="skills_name">{skill.name}</h3>
            <div className="skills_bar">
              <div className="skills_progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
