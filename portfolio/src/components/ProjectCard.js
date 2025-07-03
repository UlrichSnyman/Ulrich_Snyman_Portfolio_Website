import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="project-card animate-pop">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
              View Project
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
