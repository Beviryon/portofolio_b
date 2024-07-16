import React, { useState } from 'react';
import './qualification.css';

const styles = {
  card: {
    backgroundColor: 'var(--background-color)',
    color: 'var(--text-color)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const educationCards = [
    { title: 'Bachelor 3', subtitle: 'EEMI', period: '2023 - 2024' },
    { title: 'Bachelor 2', subtitle: 'Etna', period: '2022 - 2023' },
    { title: 'BTS SIO', subtitle: 'Institut - F2I', period: '2021 - 2022' },
    { title: 'Licence 1 en Informatique', subtitle: 'ECES', period: '2020 - 2021' },
    { title: 'Infographie', subtitle: 'CAMI', period: '2020' },
  ];

  const experienceCards = [
    { title: 'Apprenti développeur FullStack', subtitle: 'Eurexo Part of Ced', period: '2023 - 2024' },
    { title: 'Stage en Sécurité Informatique', subtitle: 'VNB-IT', period: '2022' },
    { title: 'Designer', subtitle: 'Expertise-Tic', period: '2021' },
    { title: 'Web Designer', subtitle: 'Figma', period: '2020' },
  ];

  const educationToShow = showAllEducation ? educationCards : educationCards.slice(0, 3);
  const experienceToShow = showAllExperience ? experienceCards : experienceCards.slice(0, 3);

  return (
    <section className="section qualification" style={styles.card}>
      <div className="container">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification_tabs">
          <div
            className={`qualification_tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => toggleTab('education')}
          >
            Education
          </div>
          <div
            className={`qualification_tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => toggleTab('experience')}
          >
            Experience
          </div>
        </div>

        <div className="qualification_content">
          {activeTab === 'education' && (
            <div className="qualification_grid">
              {educationToShow.map((edu, index) => (
                <EducationCard key={index} title={edu.title} subtitle={edu.subtitle} period={edu.period} />
              ))}
              <button className="show_more_button" onClick={() => setShowAllEducation(!showAllEducation)}>
                {showAllEducation ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="qualification_grid">
              {experienceToShow.map((exp, index) => (
                <ExperienceCard key={index} title={exp.title} subtitle={exp.subtitle} period={exp.period} />
              ))}
              <button className="show_more_button" onClick={() => setShowAllExperience(!showAllExperience)}>
                {showAllExperience ? 'Voir moins' : 'Voir plus'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ title, subtitle, period }) => (
  <div className="qualification_card">
    <h3 className="qualification_title">{title}</h3>
    <span className="qualification_subtitle">{subtitle}</span>
    <div className="qualification_calendar">
      <i className="uil uil-calendar-alt"></i>{period}
    </div>
  </div>
);

const ExperienceCard = ({ title, subtitle, period }) => (
  <div className="qualification_card">
    <h3 className="qualification_title">{title}</h3>
    <span className="qualification_subtitle">{subtitle}</span>
    <div className="qualification_calendar">
      <i className="uil uil-calendar-alt"></i>{period}
    </div>
  </div>
);

export default Qualification;
