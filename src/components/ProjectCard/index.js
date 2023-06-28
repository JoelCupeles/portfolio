import React from 'react';
import './styles.css';

const ProjectCard = (props) => {

    return (
        <div className="project-card">
            <h3>{props.title}</h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={`/images/${props.image}`} alt={props.title} />
            </a>
            <p>{props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectCard;