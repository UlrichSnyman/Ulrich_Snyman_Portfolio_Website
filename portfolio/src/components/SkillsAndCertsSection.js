import React from 'react';
import { professionalSkills } from '../data/portfolioData';

const allCertificatesFile = require('../assets/certs/Ulrich_Snyman_All_Certificates.pdf');
const cvFile = require('../assets/certs/Ulrich_Snyman_CV_v2.pdf');

/** Tech-stack categories with icons */
const techCategories = {
  languages: [
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Sass/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Delphi', img: require('../assets/icons/delphi.png') },
  ],
  frameworks: [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Spring', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'HTMX', img: require('../assets/icons/htmx.png') },
  ],
  databases: [
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Mongoose', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
    { name: 'Microsoft Access', img: require('../assets/icons/MicrosoftAccess.png') },
  ],
  tools: [
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'WebGL', img: 'https://images.seeklogo.com/logo-png/31/1/webgl-logo-png_seeklogo-316725.png' },
    { name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Websockets', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  ],
};

/** Certificate qualifications list */
const qualifications = [
  'Introduction to Programming',
  'Node.js',
  'Python',
  'HTMX',
  'MERN Stack',
  'React',
  'SQL',
  'Java (Beginner)',
  'Java (Advanced)',
];

/**
 * Builds the ordered list of orbit blocks:
 * 4 tech categories + 3 professional skill groups + 1 certificates block = 8 total
 * Evenly spaced at 45° intervals.
 */
function buildOrbitBlocks() {
  const blocks = [];

  // Tech categories (icon grid)
  Object.entries(techCategories).forEach(([name, techs]) => {
    blocks.push({
      id: name,
      title: name.charAt(0).toUpperCase() + name.slice(1),
      type: 'tech',
      items: techs,
    });
  });

  // Professional skill groups (bullet list)
  professionalSkills.forEach(group => {
    blocks.push({
      id: group.title,
      title: group.title,
      type: 'skills',
      items: group.skills,
    });
  });

  // Certificates block
  blocks.push({
    id: 'certificates',
    title: 'Certificates',
    type: 'certs',
    items: qualifications,
  });

  return blocks; // 8 blocks total → 360/8 = 45° spacing
}

const orbitBlocks = buildOrbitBlocks();
const BLOCK_COUNT = orbitBlocks.length;

function TechBlock({ block }) {
  if (block.type === 'tech') {
    return (
      <div className="orbit-block-content tech-category">
        <h3 className="category-title">{block.title}</h3>
        <div className="technologies-grid">
          {block.items.map(tech => (
            <div key={tech.name} className="technology-card" title={tech.name}>
              <img src={tech.img} alt={`${tech.name} logo`} className="technology-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === 'skills') {
    return (
      <div className="orbit-block-content tech-category">
        <h3 className="category-title">{block.title}</h3>
        <ul className="skill-card-list">
          {block.items.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

  // certs
  return (
    <div className="orbit-block-content tech-category">
      <h3 className="category-title">{block.title}</h3>
      <ul className="skill-card-list">
        {block.items.map(q => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillsAndCertsSection() {
  return (
    <section id="skills" className="skills-certs-section animate-slide-in">
      <h2>Skills, Technologies &amp; Certificates</h2>
      <p className="section-subtitle">Technologies, tools, professional skills, and qualifications</p>

      {/* ── Radial orbit layout (large screens) ── */}
      <div className="orbit-outer" aria-label="Skills and technologies orbit">
        <div className="orbit-container">
          {/* Central action buttons – do NOT rotate */}
          <div className="orbit-center">
            <a
              href={allCertificatesFile}
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-certs-btn"
              aria-label="View all certificates (PDF)"
            >
              View Certificates
            </a>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-certs-btn view-cv-btn"
              aria-label="View CV (PDF)"
            >
              View CV
            </a>
          </div>

          {/* Rotating ring */}
          <div className="orbit-ring" aria-hidden="true">
            {orbitBlocks.map((block, i) => {
              const angle = (360 / BLOCK_COUNT) * i;
              return (
                <div
                  key={block.id}
                  className="orbit-block"
                  style={{ '--orbit-angle': `${angle}deg` }}
                >
                  <TechBlock block={block} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Accessible flat grid (aria-hidden=false; always rendered for screen readers / small screens) ── */}
      <div className="orbit-fallback-grid" role="region" aria-label="Skills and technologies list">
        {orbitBlocks.map(block => (
          <TechBlock key={block.id} block={block} />
        ))}
        <div className="fallback-buttons">
          <a
            href={allCertificatesFile}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-certs-btn"
            aria-label="View all certificates (PDF)"
          >
            View Certificates
          </a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-certs-btn view-cv-btn"
            aria-label="View CV (PDF)"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertsSection;
