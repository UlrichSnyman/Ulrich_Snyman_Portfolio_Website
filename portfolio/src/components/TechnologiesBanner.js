import React from 'react';

const techData = [
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Sass/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Delphi', img: require('../assets/icons/delphi.png') },
  { name: 'HTMX', img: require('../assets/icons/htmx.png') },
  { name: 'Mongoose', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
  { name: 'Microsoft Access', img: require('../assets/icons/MicrosoftAccess.png') },
  { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'WebGL', img: 'https://images.seeklogo.com/logo-png/31/1/webgl-logo-png_seeklogo-316725.png' },
  { name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Axios', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-original.svg' },
];

function TechnologiesBanner() {
  return (    
   <section id="skills" className="technologies-banner animate-slide-in">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {techData.map((tech) => (
          <img
            key={tech.name}
            src={tech.img}
            alt={tech.name}
            title={tech.name}
            className="technology-icon animate-pop"
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologiesBanner;
