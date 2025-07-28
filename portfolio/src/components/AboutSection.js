import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>
          <p>
            Software Engineering student at Code College with hands-on experience in full-stack development. 
            Proficient in React, Node.js, Python, and Django with a track record of delivering web applications 
            from concept to deployment.
          </p>
          <p>
            Seeking opportunities to contribute to innovative projects and grow within a dynamic development team.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;