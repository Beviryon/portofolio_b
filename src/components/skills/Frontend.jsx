import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Frontend = () => {
  const frontendSkills = [
    { name: 'HTML', icon: faHtml5, level: 90, class: 'skill-html' },
    { name: 'CSS', icon: faCss3Alt, level: 85, class: 'skill-css' },
    { name: 'JavaScript', icon: faJsSquare, level: 80, class: 'skill-js' },
    { name: 'Bootstrap', icon: faBootstrap, level: 75, class: 'skill-bootstrap' },
    { name: 'React.js', icon: faReact, level: 70, class: 'skill-react' },
  ];

  return (
    <div className="skills_section">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_container">
        {frontendSkills.map((skill, index) => (
          <div className={`skills_card ${skill.class}`} key={index}>
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
