import React from 'react';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-content">
        <div className="profile-info">
          <h1>Ulrich Snyman</h1>
          <p className="title"><span className="highlight-text">Full-Stack Developer</span> & <span className="highlight-text">Software Engineer</span></p>
          <p className="location"><a href="https://www.google.com/maps/place/Pretoria" target="_blank" rel="noopener noreferrer">Pretoria, Gauteng</a> UTC +02:00 </p>
          <p className="description">Skilled in <span className="highlight-text">React</span>, <span className="highlight-text">Node.js</span>, and <span className="highlight-text">Python</span>. Building <span className="highlight-text">web solutions</span> with clean interfaces and robust backend systems.</p>
          <div className="work-status">
            <p>Current Occupation: <span className="highlight-text">Code College, Intern</span></p>
            <p>Looking for work: <span className="status-no">Yes</span></p>
          </div>
        </div>
        <div className="profile-image">
          <img src={require('../assets/images/Pfp.jpg')} alt="Ulrich Snyman - Full Stack Developer portrait photo" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
