 import React from 'react'
 import "./skills.css";
import "./style.css";
 import Frontend from './Frontend';
 import Backend from './Backend';
//  import Backfront from './Backfront';

 const Skills = () => {
   return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Compétences</h2>
        <span className="section_subtitle"> Mes compétences techniques</span> 

        <div className="skills_container container grid">

        <Frontend />
        <Backend />
        {/* <Backfront /> */}
        </div>
    </section>
   )
 }
 
 export default Skills