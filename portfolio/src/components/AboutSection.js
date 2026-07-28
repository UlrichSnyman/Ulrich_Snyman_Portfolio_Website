import React, { Component } from 'react';
import { profile } from '../data/portfolioData';

const ChevronIcon = ({ expanded }) => (
  <svg
    className={`collapse-icon ${expanded ? 'expanded' : ''}`}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
  </svg>
);

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummary: false,
      showContact: false,
      showLanguages: false,
    };
  }

  toggle = (key) => {
    this.setState(prev => ({ [key]: !prev[key] }));
  }

  handleKeyDown = (e, key) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.toggle(key);
    }
  }

  render() {
    const { showSummary, showContact, showLanguages } = this.state;

    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>

          {/* Professional Summary */}
          <div className="collapsible-section">
            <button
              className="collapsible-header"
              onClick={() => this.toggle('showSummary')}
              onKeyDown={(e) => this.handleKeyDown(e, 'showSummary')}
              aria-expanded={showSummary}
              aria-label="Toggle professional summary"
            >
              <span>Professional Summary</span>
              <ChevronIcon expanded={showSummary} />
            </button>
            {showSummary && (
              <div className="collapsible-content">
                <p>{profile.professionalSummary}</p>
              </div>
            )}
          </div>

          {/* Languages */}
          <div className="collapsible-section">
            <button
              className="collapsible-header"
              onClick={() => this.toggle('showLanguages')}
              onKeyDown={(e) => this.handleKeyDown(e, 'showLanguages')}
              aria-expanded={showLanguages}
              aria-label="Toggle language information"
            >
              <span>Languages</span>
              <ChevronIcon expanded={showLanguages} />
            </button>
            {showLanguages && (
              <div className="collapsible-content">
                <ul className="languages-list">
                  {profile.languages.map(lang => (
                    <li key={lang.name} className="language-item">
                      <span className="language-name">{lang.name}</span>
                      <span className="language-level">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="collapsible-section">
            <button
              className="collapsible-header"
              onClick={() => this.toggle('showContact')}
              onKeyDown={(e) => this.handleKeyDown(e, 'showContact')}
              aria-expanded={showContact}
              aria-label="Toggle contact information"
            >
              <span>Contact Information</span>
              <ChevronIcon expanded={showContact} />
            </button>
            {showContact && (
              <div className="collapsible-content contact-details">
                <p>
                  <span className="contact-label">Email:</span>{' '}
                  <a href={`mailto:${profile.email}`} className="contact-link" aria-label="Send email to Ulrich Snyman">
                    {profile.email}
                  </a>
                </p>
                <p>
                  <span className="contact-label">Phone:</span>{' '}
                  <a href={`tel:${profile.phone}`} className="contact-link" aria-label="Call Ulrich Snyman">
                    {profile.phone}
                  </a>
                </p>
                <p>
                  <span className="contact-label">Portfolio:</span>{' '}
                  <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Visit portfolio website">
                    {profile.portfolio}
                  </a>
                </p>
                <p>
                  <span className="contact-label">LinkedIn:</span>{' '}
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Visit Ulrich Snyman's LinkedIn profile">
                    {profile.linkedinHandle}
                  </a>
                </p>
                <p>
                  <span className="contact-label">GitHub:</span>{' '}
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Visit Ulrich Snyman's GitHub profile">
                    {profile.githubHandle}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;