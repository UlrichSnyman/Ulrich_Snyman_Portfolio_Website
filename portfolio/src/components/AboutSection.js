import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>
          <p>
            <span className="highlight-text">Full-stack developer</span> at <span className="highlight-text">Code College</span> with hands-on experience in software development. 
            Proficient in <span className="highlight-text">React</span>, <span className="highlight-text">Node.js</span>, <span className="highlight-text">Python</span>, and <span className="highlight-text">MongoDB</span> with a track record of delivering web applications 
            from concept to deployment.
          </p>
          <p>
            Always seeking to expand my skill set and stay updated with the latest technologies. 
            So, please, <span className="highlight-text">challenge me</span> with your projects.
          </p>
          
          <div className="contact-info">
            <h4>Let's Connect</h4>
            <p>You can reach me at:</p>
            <div className="contact-details">
              <p><span className="contact-label">Email:</span> <a href="mailto:ulrichsnymancode@gmail.com" className="contact-link" tabIndex="0" aria-label="Send email to Ulrich Snyman">ulrichsnymancode@gmail.com</a></p>
              <p><span className="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/ulrich-snyman-a5a980368/" target="_blank" rel="noopener noreferrer" className="contact-link" tabIndex="0" aria-label="Visit Ulrich Snyman's LinkedIn profile">Ulrich Snyman</a></p>
              <p><span className="contact-label">GitHub:</span> <a href="https://github.com/UlrichSnyman" target="_blank" rel="noopener noreferrer" className="contact-link" tabIndex="0" aria-label="Visit Ulrich Snyman's GitHub profile">UlrichSnyman</a></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;