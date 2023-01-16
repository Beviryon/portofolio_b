import React, { useState } from 'react'
import "./qualification.css"


const Qualifiction = () => {
  const [ toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  } 

  return (
    <section className="section qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My peronel journey</span>

      <div className="qualificaton_container container">
        <div className="qualification_tabs">
          <div className={ toggleState === 1 ? "qualification_button qualification_active button--flex" 
          : "qualification_button button--flex"}
          onClick={() => toggleTab(1)} >
            <i className="uil uil-graduation-cap qualification_icon"></i>
             Education
          </div>

          <div className={ toggleState === 2 ? "qualification_button qualification_active button--flex" 
          : "qualification_button button--flex"}
          onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i>
             Expérience
          </div>
        </div>

        <div className="qualification_sections">
          <div className={ toggleState === 1 ? "qualification_content qualification_content-active" 
          : "qualification_content"}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Bachelor</h3>
                <span className="qualification_subtitle">Etna</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

               <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">BTS SIO</h3>
                <span className="qualification_subtitle">Institut - F2I</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Licence 1 en Informatique</h3>
                <span className="qualification_subtitle">ECES</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

               <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Infographie</h3>
                <span className="qualification_subtitle">CAMI</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>
            </div>
          </div>

          <div className={ toggleState === 2  ? "qualification_content qualification_content-active" 
          : "qualification_content"}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Stage en Sécurité Informatique</h3>
                <span className="qualification_subtitle">VNB-IT</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
                <div></div>

               <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Designer</h3>
                <span className="qualification_subtitle">Expertise-Tic</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Figma</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Qualifiction