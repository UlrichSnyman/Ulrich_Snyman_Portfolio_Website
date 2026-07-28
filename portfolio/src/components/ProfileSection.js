import React from 'react';
import { profile } from '../data/portfolioData';

function ProfileSection() {
  return (
    <div className="profile-section animate-fade-in">
      <div className="profile-content">
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="title">
            <span className="highlight-text">{profile.headline}</span>
          </p>
          <p className="location">
            <a href={profile.locationUrl} target="_blank" rel="noopener noreferrer">
              {profile.location}
            </a>
          </p>

          {/* Contact badges */}
          <div className="profile-contact-badges">
            <a href={`mailto:${profile.email}`} className="contact-badge" aria-label="Send email">
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`} className="contact-badge" aria-label="Call phone number">
              <span>{profile.phone}</span>
            </a>
          </div>

          <div className="work-status">
            <p>Looking for work: <span className="status-no">Yes</span></p>
          </div>
        </div>
        <div className="profile-image">
          <img src={profile.profileImage} alt={`${profile.name} - Full Stack Developer`} />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
