import React from 'react';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-image">
        <img src={require('../assets/images/Pfp.jpg')} alt="Profile" />
      </div>
      <h1>Ulrich Snyman</h1>
      <p>Full-Stack Developer & Software Engineering Student</p>
      <p>Passionate about creating beautiful and functional web applications</p>
    </div>
  );
}

export default ProfileSection;
