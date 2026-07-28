import React from 'react';
import { profile } from '../data/portfolioData';

function ProfileSection() {
  return (
    <section id="profile" className="profile-section animate-fade-in">
      <div className="profile-content">
        {/* Left column: identity + contact */}
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
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-badge" aria-label="GitHub profile">
              <span>GitHub: {profile.githubHandle}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-badge" aria-label="LinkedIn profile">
              <span>LinkedIn: {profile.linkedinHandle}</span>
            </a>
          </div>

          <div className="work-status">
            <p>Open to opportunities: <span className="status-yes">Yes</span></p>
          </div>
        </div>

        {/* Centre column: profile image */}
        <div className="profile-image">
          <img src={profile.profileImage} alt={`${profile.name} - Junior IT & Full-Stack Developer`} />
        </div>

        {/* Right column: professional summary */}
        <div className="profile-summary">
          <h2>About Me</h2>
          <p>{profile.professionalSummary}</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
