import React from 'react';

const certificates = [
  {
    title: "Node.js",
    file: require('../assets/certs/Ulrich_Snyman_Node.js.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "Python",
    file: require('../assets/certs/Ulrich_Snyman_Python.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    title: "HTMX",
    file: require('../assets/certs/Ulrich_Snyman_HTMX.pdf'),
    icon: require('../assets/icons/htmx.png')
  },
  {
    title: "Introduction to Programming",
    file: require('../assets/certs/Ulrich_Snyman_Intro_to_Programming.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "MERN Stack",
    file: require('../assets/certs/Ulrich Snyman MERN Stack.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    title: "React",
    file: require('../assets/certs/Ulrich Snyman React.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "SQL",
    file: require('../assets/certs/Ulrich Snyman SQL.pdf'),
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }
];

function CertificatesSection() {
  return (
    <section className="certificates-section animate-fade-in">
      <h2>Certificates & Achievements</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <img src={cert.icon} alt={`${cert.title} icon`} className="certificate-icon" />
            <h3>{cert.title}</h3>
            <div className="view-cert">
              <span>View Certificate</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;
