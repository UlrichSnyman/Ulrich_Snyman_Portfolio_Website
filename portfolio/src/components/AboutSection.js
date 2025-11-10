import React, { Component } from 'react';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      showContact: false
    };
  }

  toggleDescription = () => {
    this.setState(prevState => ({ showDescription: !prevState.showDescription }));
  }

  toggleContact = () => {
    this.setState(prevState => ({ showContact: !prevState.showContact }));
  }

  handleKeyDown = (e, toggleFunction) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFunction();
    }
  }

  render() {
    const { showDescription, showContact } = this.state;

    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>
          
          {/* Collapsible Description */}
          <div className="collapsible-section">
            <button 
              className="collapsible-header" 
              onClick={this.toggleDescription}
              onKeyDown={(e) => this.handleKeyDown(e, this.toggleDescription)}
              aria-expanded={showDescription}
              aria-label="Toggle about me description"
            >
              <span>Background</span>
              <svg 
                className={`collapse-icon ${showDescription ? 'expanded' : ''}`} 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {showDescription && (
              <div className="collapsible-content">
                <p>
                  I am a junior web developer intern at <span className="highlight-text">Code College</span>. 
                  I have the most experience working with <span className="highlight-text">Java</span> and <span className="highlight-text">Python</span>, along with their frameworks. 
                  I also work with other languages and frameworks, which you can see in the technologies section below.
                </p>
                <p>
                  I am always looking to learn and take on new projects.
                </p>
              </div>
            )}
          </div>

          {/* Collapsible Contact Details */}
          <div className="collapsible-section">
            <button 
              className="collapsible-header" 
              onClick={this.toggleContact}
              onKeyDown={(e) => this.handleKeyDown(e, this.toggleContact)}
              aria-expanded={showContact}
              aria-label="Toggle contact information"
            >
              <span>Contact Information</span>
              <svg 
                className={`collapse-icon ${showContact ? 'expanded' : ''}`} 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {showContact && (
              <div className="collapsible-content contact-details">
                <p><span className="contact-label">Email:</span> <a href="mailto:ulrichsnymancode@gmail.com" className="contact-link" tabIndex="0" aria-label="Send email to Ulrich Snyman">ulrichsnymancode@gmail.com</a></p>
                <p><span className="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/ulrich-snyman-a5a980368/" target="_blank" rel="noopener noreferrer" className="contact-link" tabIndex="0" aria-label="Visit Ulrich Snyman's LinkedIn profile">Ulrich Snyman</a></p>
                <p><span className="contact-label">GitHub:</span> <a href="https://github.com/UlrichSnyman" target="_blank" rel="noopener noreferrer" className="contact-link" tabIndex="0" aria-label="Visit Ulrich Snyman's GitHub profile">UlrichSnyman</a></p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;