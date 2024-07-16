import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faVuejs, faSass, faNodeJs  } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faCode } from '@fortawesome/free-solid-svg-icons';
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
const Frontend = () => {
  const frontendSkills = [
    { name: 'HTML', icon: faHtml5, level: 90, class: 'skill-html' },
    { name: 'CSS', icon: faCss3Alt, level: 85, class: 'skill-css' },
    { name: 'JavaScript', icon: faJsSquare, level: 80, class: 'skill-js' },
    { name: 'Bootstrap', icon: faBootstrap, level: 75, class: 'skill-bootstrap' },
    { name: 'React.js', icon: faReact, level: 70, class: 'skill-react' },
    { name: 'Nuxt.js', icon: faVuejs, level: 65, class: 'skill-nuxt' },
    { name: 'Svelte', icon: faFileCode, level: 60, class: 'skill-svelte' },
    { name: 'Kotlin', icon: faCode, level: 55, class: 'skill-kotlin' },
    { name: 'Next.js', icon: faNodeJs, level: 50, class: 'skill-next' },
    { name: 'TypeScript', icon: faJsSquare, level: 75, class: 'skill-typescript' },
  ];

  return (
    <div className="skills_section" style={styles.card}>
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
