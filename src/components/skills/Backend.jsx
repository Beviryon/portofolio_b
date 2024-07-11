import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const styles = {
  card: {
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};
const Backend = () => {
  const backendSkills = [
    { name: 'Strapi', icon: faServer, level: 85, class: 'skill-strapi' },
    { name: 'Node.js', icon: faNodeJs, level: 80, class: 'skill-nodejs' },
    { name: 'MySQL', icon: faDatabase, level: 75, class: 'skill-mysql' },
    { name: 'PHP', icon: faPhp, level: 70, class: 'skill-php' },
    { name: 'Express.js', icon: faServer, level: 65, class: 'skill-express' },
    { name: 'Microsoft Azure', icon: faServer, level: 60, class: 'skill-azure' },
  ];

  return (
    <div className="skills_section" style={styles.card}>
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_container">
        {backendSkills.map((skill, index) => (
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

export default Backend;
