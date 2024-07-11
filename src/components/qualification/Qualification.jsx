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

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="section qualification"  style={styles.card}>
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
              <EducationCard
                title="Bachelor 3"
                subtitle="EEMI"
                period="2023 - 2024"
              />
              <EducationCard
                title="Bachelor 2"
                subtitle="Etna"
                period="2022 - 2023"
              />
              <EducationCard
                title="BTS SIO"
                subtitle="Institut - F2I"
                period="2021 - 2022"
              />
              <EducationCard
                title="Licence 1 en Informatique"
                subtitle="ECES"
                period="2020 - 2021"
              />
              <EducationCard
                title="Infographie"
                subtitle="CAMI"
                period="2020"
              />
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="qualification_grid">
              <ExperienceCard
                title="Apprenti développeur FullStack"
                subtitle="Eurexo Part of Ced"
                period="2023 - 2024"
              />
              <ExperienceCard
                title="Stage en Sécurité Informatique"
                subtitle="VNB-IT"
                period="2022"
              />
              <ExperienceCard
                title="Designer"
                subtitle="Expertise-Tic"
                period="2021"
              />
              <ExperienceCard
                title="Web Designer"
                subtitle="Figma"
                period="2020"
              />
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
