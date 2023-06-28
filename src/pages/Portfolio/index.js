import React from 'react';
import './styles.css';
import ProjectCard from '../../components/ProjectCard';

const Portfolio = () => {

    const projects = [
        { 
          title: 'ParkQuest', 
          description: 'Park Quest is a web application that allows users to search for national parks by selecting a state.',
          link: 'https://joelcupeles.github.io/ParkQuest/',
          image: 'park.png'  
        },
        { 
            title: 'Weather Dashboard', 
            description: 'The Weather Dashboard is a web application that allows users to search for the weather in a specific city.',
            link: 'https://joelcupeles.github.io/Weather-Forecast/',
            image: ''
        }
        // more projects 
    ];

    return (
        <div className="portfolio">
            <h1>My Portfolio</h1>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default Portfolio