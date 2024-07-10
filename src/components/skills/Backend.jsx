import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';

const Backend = () => {
  const backendSkills = [
    { name: 'Strapi', icon: faServer, level: '85%' },
    { name: 'Node.js', icon: faNodeJs, level: '80%' },
    { name: 'MySQL', icon: faDatabase, level: '75%' },
    { name: 'PHP', icon: faPhp, level: '70%' },
    { name: 'Express.js', icon: faServer, level: '65%' },
    { name: 'Microsoft Azure', icon: faServer, level: '60%' },
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          {backendSkills.map((skill, index) => (
            <div className="skills_card" key={index}>
              <FontAwesomeIcon icon={skill.icon} className="skills_icon" />
              <div className="skills_details">
                <h3 className="skills_name">{skill.name}</h3>
                <div className="skills_progress">
                  <div className="skills_progress_bar" style={{ width: skill.level }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
