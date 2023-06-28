import React from 'react';
import './styles.css';
import profilePic from './me.jpg'; // update with your image path

const AboutMe = () => {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <img src={profilePic} alt="Profile" />
            <p>
            Driven finance professional with a Bachelor's degree in Finance and a keen passion for the aerospace industry. Recently appointed as an Estimating Specialist at Boeing, bringing a fresh perspective and a commitment to accuracy and strategic planning in financial estimation.

            Originally from Puerto Rico and now making waves in St. Louis, I'm equipped with a diverse background that inspires my approach to financial analysis. Always eager to learn, I am committed to staying updated with the latest industry trends and enhancing my skills in financial modeling and data analytics.</p>
        <p>I am proficient in multiple web development languages and I have a strong command of both English and Spanish. No matter how difficult the task may be, I am confident in my ability to complete it to the best of my ability.</p>
        </div>
    );
};

export default AboutMe;