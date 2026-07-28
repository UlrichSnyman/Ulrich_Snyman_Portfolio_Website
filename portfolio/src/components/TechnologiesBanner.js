import React from 'react';
import { professionalSkills } from '../data/portfolioData';

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

function TechnologiesBanner() {
  return (
   <section id="skills" className="technologies-banner animate-slide-in">
      <h2>Technologies &amp; Skills</h2>

      <div className="tech-columns">
        {Object.entries(techCategories).map(([categoryName, technologies]) => (
          <div key={categoryName} className="tech-category">
            <h3 className="category-title">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
            <div className="technologies-grid">
              {technologies.map((tech) => (
                <div key={tech.name} className="technology-card animate-pop" title={tech.name}>
                  <img
                    src={tech.img}
                    alt={`${tech.name} logo`}
                    className="technology-icon"
                  />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {professionalSkills.map((group) => (
          <div key={group.title} className="tech-category">
            <h3 className="category-title">{group.title}</h3>
            <ul className="skill-card-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesBanner;
