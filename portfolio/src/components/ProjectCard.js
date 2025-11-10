import React from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="project-card animate-pop">
      <div className="project-image">
        {imageUrl ? (
          <img src={imageUrl} alt={`Screenshot of ${title} project`} />
        ) : (
          <div className="placeholder-image">
            <div className="placeholder-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <span>Screenshot Coming Soon</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-main-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="project-bottom">
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            {projectUrl && (
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link live"
                tabIndex="0"
                aria-label={`View ${title} project live demo`}
              >
                View Project
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link github"
                tabIndex="0"
                aria-label={`View ${title} source code on GitHub`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
