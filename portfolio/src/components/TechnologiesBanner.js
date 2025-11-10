import React from 'react';

const techCategories = {
  languages: [
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Dynamic web scripting language' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Versatile programming language' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Object-oriented programming language' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Web structure markup language' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Web styling language' },
    { name: 'Sass/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', description: 'CSS preprocessor' },
  ],
  frameworks: [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Frontend JavaScript library' },
    { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', description: 'Python web framework' },
    { name: 'Spring', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Java application framework' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'JavaScript runtime environment' },
    { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Node.js web framework' },
    { name: 'HTMX', img: require('../assets/icons/htmx.png'), description: 'HTML enhancement library' },
  ],
  databases: [
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'NoSQL document database' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Advanced relational database system' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', description: 'Google cloud platform' },
    { name: 'Mongoose', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', description: 'MongoDB object modeling' },
    { name: 'Microsoft Access', img: require('../assets/icons/MicrosoftAccess.png'), description: 'Desktop database application' },
  ],
  tools: [
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', description: 'Version control platform' },
    { name: 'WebGL', img: 'https://images.seeklogo.com/logo-png/31/1/webgl-logo-png_seeklogo-316725.png', description: 'Web graphics library' },
    { name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', description: 'API query language' },
    { name: 'Websockets', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', description: 'Real-time communication protocol' },
    { name: 'Delphi', img: require('../assets/icons/delphi.png'), description: 'Object Pascal development environment' },
  ],
};

function TechnologiesBanner() {
  return (    
   <section id="skills" className="technologies-banner animate-slide-in">
      <h2>Technologies & Skills</h2>
      
      {Object.entries(techCategories).map(([categoryName, technologies]) => (
        <div key={categoryName} className="tech-category">
          <h3 className="category-title">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
          <div className="technologies-grid">
            {technologies.map((tech) => (
              <div key={tech.name} className="technology-card animate-pop">
                <img
                  src={tech.img}
                  alt={tech.name}
                  title={tech.name}
                  className="technology-icon"
                />
                <div className="tech-info">
                  <h4 className="tech-name">{tech.name}</h4>
                  <p className="tech-description">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechnologiesBanner;
