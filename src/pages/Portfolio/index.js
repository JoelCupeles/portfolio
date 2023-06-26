import React from 'react';
import './styles.css';

const Portfolio = () => {
   
    const projects = [
        { 
            title: 'ParkQuest', 
            description: 'Park Quest is a web application that allows users to search for national parks by selecting a state.',
            link: 'https://joelcupeles.github.io/ParkQuest/'
        },
        { 
            title: 'Weather Dashboard', 
            description: 'he Weather Dashboard is a web application that allows users to search for the weather in a specific city.',
            link: 'https://joelcupeles.github.io/Weather-Forecast/'
        }
        // Adding more projects later
    ];

    return (
        <div className="portfolio">
            <h1>My Portfolio</h1>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;