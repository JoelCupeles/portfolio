import React from 'react';
import './styles.css';

const Resume = () => {
    return (
        <div className="resume">
        <h1>Resume</h1>
        <h2>Experience</h2>
        <p>As an estimator at Boeing, I worked on multiple government contract proposals. My role involved collaborating with individuals from diverse backgrounds and gathering information to provide accurate estimates.</p>
              
        <h2>Skills</h2>
        <p>I possess skills in MS Excel, JavaScript, and MySQL. Additionally, I am bilingual in Spanish and English.</p>
              
        <h2>Education</h2>
        <p>
          <b>Online Bootcamp in Coding</b><br />
          Washington University – St. Louis<br />
          Jan 2023 – June 2024
        </p>
        <p>
          <b>B.S.B.A. in Finance</b><br />
          University of Puerto Rico - Mayagüez<br />
          May 2021 | GPA: 3.38
        </p>
              
        <a href="path-to-your-resume.pdf" download>Download my full resume</a>
      </div>
    );
};

export default Resume;