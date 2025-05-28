import React, { useState } from 'react';

const techData = [
  // ...same as before, omitted for brevity...
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', project: 'https://github.com/ulrichsnyman/js-project', source: 'https://github.com/ulrichsnyman/js-project/archive/refs/heads/main.zip' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', project: 'https://github.com/ulrichsnyman/python-project', source: 'https://github.com/ulrichsnyman/python-project/archive/refs/heads/main.zip' },
  { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', project: 'https://github.com/ulrichsnyman/css-project', source: 'https://github.com/ulrichsnyman/css-project/archive/refs/heads/main.zip' },
  { name: 'Sass/SCSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', project: 'https://github.com/ulrichsnyman/sass-project', source: 'https://github.com/ulrichsnyman/sass-project/archive/refs/heads/main.zip' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', project: 'https://github.com/ulrichsnyman/mongodb-project', source: 'https://github.com/ulrichsnyman/mongodb-project/archive/refs/heads/main.zip' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', project: 'https://github.com/ulrichsnyman/nodejs-project', source: 'https://github.com/ulrichsnyman/nodejs-project/archive/refs/heads/main.zip' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', project: 'https://github.com/ulrichsnyman/react-project', source: 'https://github.com/ulrichsnyman/react-project/archive/refs/heads/main.zip' },
  { name: 'Django', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', project: 'https://github.com/ulrichsnyman/django-project', source: 'https://github.com/ulrichsnyman/django-project/archive/refs/heads/main.zip' },
  { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', project: 'https://github.com/ulrichsnyman/firebase-project', source: 'https://github.com/ulrichsnyman/firebase-project/archive/refs/heads/main.zip' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', project: 'https://github.com/ulrichsnyman/mysql-project', source: 'https://github.com/ulrichsnyman/mysql-project/archive/refs/heads/main.zip' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', project: 'https://github.com/ulrichsnyman', source: 'https://github.com/ulrichsnyman' },
  { name: 'Delphi', img: '/delphi.png', project: 'https://github.com/ulrichsnyman/delphi-project', source: 'https://github.com/ulrichsnyman/delphi-project/archive/refs/heads/main.zip' },
  { name: 'HTMX', img: '/htmx.png', project: 'https://github.com/ulrichsnyman/htmx-project', source: 'https://github.com/ulrichsnyman/htmx-project/archive/refs/heads/main.zip' },
  { name: 'Mongoose', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', project: 'https://github.com/ulrichsnyman/mongoose-project', source: 'https://github.com/ulrichsnyman/mongoose-project/archive/refs/heads/main.zip' },
];

function TechnologiesBanner() {
  const [modal, setModal] = useState({ open: false, tech: null });

  const handleIconClick = (tech) => {
    setModal({ open: true, tech });
  };

  const closeModal = () => setModal({ open: false, tech: null });

  return (
    <>
      <section className="certificates-banner animate-slide-in">
        <h2>Technologies</h2>
        <div className="certificates-images">
          {techData.map((tech) => (
            <img
              key={tech.name}
              src={tech.img}
              alt={tech.name}
              title={tech.name}
              onClick={() => handleIconClick(tech)}
              style={{ cursor: 'pointer' }}
              className="animate-pop"
            />
          ))}
        </div>
      </section>
      {modal.open && (
        <div className="tech-modal" onClick={closeModal}>
          <div className="tech-modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
            <h3>{modal.tech.name}</h3>
            <a href={modal.tech.project} target="_blank" rel="noopener noreferrer" className="modal-link">View Project</a>
            <a href={modal.tech.source} target="_blank" rel="noopener noreferrer" className="modal-link">Download Source</a>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TechnologiesBanner;
