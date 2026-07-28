import React from 'react';

const allCertificatesFile = require('../assets/certs/Ulrich_Snyman_All_Certificates.pdf');

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
        <a
          href={allCertificatesFile}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-certs-btn"
          aria-label="View all certificates in a single condensed PDF"
        >
          View All Certificates (PDF)
        </a>
      </div>
    </section>
  );
}

export default CertificatesSection;
