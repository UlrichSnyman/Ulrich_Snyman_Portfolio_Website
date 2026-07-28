import React from 'react';

const allCertificatesFile = require('../assets/certs/Ulrich_Snyman_All_Certificates.pdf');
const cvFile = require('../assets/certs/Ulrich_Snyman_CV_v2.pdf');

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

function CertificatesSection() {
  return (
    <section className="certificates-section animate-fade-in">
      <h2>Certificates &amp; Achievements</h2>
      <div className="certificates-summary">
        <ul className="qualifications-list">
          {qualifications.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
        <div className="certs-buttons-row">
          <a
            href={allCertificatesFile}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-certs-btn"
            aria-label="View all certificates in a single condensed PDF"
          >
            View All Certificates (PDF)
          </a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-certs-btn view-cv-btn"
            aria-label="View my CV in PDF format"
          >
            View CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
