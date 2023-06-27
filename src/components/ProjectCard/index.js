import React from 'react';
import './styles.css';

const ProjectCard = (props) => {

    return (
        <div className="project-card">
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectCard;