import React from 'react';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-content">
        <div className="profile-info">
          <h1>Ulrich Snyman</h1>
          <p className="title"><span className="highlight-text">Junior Full-Stack Web Developer</span></p>
          <p className="location"><a href="https://www.google.com/maps/place/Pretoria" target="_blank" rel="noopener noreferrer">Pretoria, Gauteng</a> UTC +02:00 </p>
          <p className="description">Experienced in <span className="highlight-text">Java</span> and <span className="highlight-text">Python</span> development. I also work with other languages and frameworks as seen in the technologies section.</p>
          <div className="work-status">
            <p>Current Occupation: <span className="highlight-text">Code College, Intern</span></p>
            <p>Looking for work: <span className="status-no">Yes</span></p>
          </div>
        </div>
        <div className="profile-image">
          <img src={require('../assets/images/Pfp.jpg')} alt="Ulrich Snyman - Full Stack Developer" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
