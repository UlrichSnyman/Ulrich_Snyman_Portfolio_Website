import React from 'react';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-content">
        <div className="profile-info">
          <h1>Ulrich Snyman</h1>
          <p className="title">Full-Stack Developer & Software Engineer</p>
          <p className="location"><a href="https://www.google.com/maps/place/Pretoria" target="_blank" rel="noopener noreferrer">Pretoria, Gauteng</a> UTC +02:00 </p>
          <p className="description">Skilled in React, Node.js, and Python. Building web solutions with clean interfaces and robust backend systems.</p>
          <div className="work-status">
            <p>Current Occupation: Code College, Intern</p>
            <p>Looking for work: <span className="status-no">No</span></p>
          </div>
        </div>
        <div className="profile-image">
          <img src={require('../assets/images/Pfp.jpg')} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
