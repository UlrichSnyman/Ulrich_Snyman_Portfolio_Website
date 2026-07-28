import React, { useState } from 'react';

const MAX_DESC_LENGTH = 100;
const MAX_TAGS_SHOWN = 4;

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }) => {
  const [descExpanded, setDescExpanded] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);

  const longDesc = description.length > MAX_DESC_LENGTH;
  const displayDesc = longDesc && !descExpanded
    ? description.slice(0, MAX_DESC_LENGTH).trimEnd() + '…'
    : description;

  const manyTags = technologies.length > MAX_TAGS_SHOWN;
  const displayTags = manyTags && !tagsExpanded
    ? technologies.slice(0, MAX_TAGS_SHOWN)
    : technologies;

  return (
    <article className="project-card animate-pop">
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
        <h4>{title}</h4>

        <p className="project-desc">
          {displayDesc}
          {longDesc && (
            <button
              className="expand-btn"
              onClick={() => setDescExpanded(e => !e)}
              aria-expanded={descExpanded}
              aria-label={descExpanded ? 'Show less description' : 'Show full description'}
            >
              {descExpanded ? ' less' : ' more'}
            </button>
          )}
        </p>

        <div className="project-technologies">
          {displayTags.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {manyTags && (
            <button
              className="expand-btn tag-expand-btn"
              onClick={() => setTagsExpanded(e => !e)}
              aria-expanded={tagsExpanded}
              aria-label={tagsExpanded ? 'Show fewer technologies' : 'Show all technologies'}
            >
              {tagsExpanded ? '− less' : `+${technologies.length - MAX_TAGS_SHOWN} more`}
            </button>
          )}
        </div>

        <div className="project-links">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live"
              aria-label={`View ${title} live demo`}
            >
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
              aria-label={`View ${title} source on GitHub`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
