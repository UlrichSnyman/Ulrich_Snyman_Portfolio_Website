import React from 'react';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-content">
        <div className="profile-info">
          <h1>Ulrich Snyman</h1>
          <p className="title">Full-Stack Developer & Software Engineering Student</p>
          <p className="location">📍 Pretoria, Gauteng</p>
          <p className="description">Skilled in React, Node.js, and Python. Building innovative web solutions with clean interfaces and robust backend systems.</p>
        </div>
        <div className="profile-image">
          <img src={require('../assets/images/Pfp.jpg')} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
