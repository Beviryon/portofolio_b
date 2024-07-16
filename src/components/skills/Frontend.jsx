import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faVuejs, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faCode, faCogs, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import './skills.css'

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
  const [showAll, setShowAll] = useState(false);

  const frontendSkills = [
    { name: 'React.js', icon: faReact, level: 70, class: 'skill-react' },
    { name: 'JavaScript', icon: faJsSquare, level: 60, class: 'skill-js' },
    { name: 'Nuxt.js', icon: faVuejs, level: 40, class: 'skill-nuxt' },
    { name: 'Svelte', icon: faFileCode, level: 60, class: 'skill-svelte' },
    { name: 'Kotlin', icon: faCode, level: 50, class: 'skill-kotlin' },
    { name: 'Next.js', icon: faNodeJs, level: 50, class: 'skill-next' },
    { name: 'HTML', icon: faHtml5, level: 90, class: 'skill-html' },
    { name: 'CSS', icon: faCss3Alt, level: 85, class: 'skill-css' },
    { name: 'TypeScript', icon: faJsSquare, level: 75, class: 'skill-typescript' },
    { name: 'PowerApps', icon: faCogs, level: 50, class: 'skill-powerapps' },
    { name: 'LogicApps', icon: faProjectDiagram, level: 45, class: 'skill-logicapps' },
    { name: 'Bootstrap', icon: faBootstrap, level: 75, class: 'skill-bootstrap' },
  ];

  const skillsToShow = showAll ? frontendSkills : frontendSkills.slice(0, 4);

  return (
    <div className="skills_section" style={styles.card}>
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_container">
        {skillsToShow.map((skill, index) => (
          <div className={`skills_card ${skill.class}`} key={index}>
            <FontAwesomeIcon icon={skill.icon} className="skills_icon" />
            <h3 className="skills_name">{skill.name}</h3>
            <div className="skills_bar">
              <div className="skills_progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <button className="show_more_button" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Voir moins -' : 'Voir plus +'}
      </button>
    </div>
  );
};

export default Frontend;
