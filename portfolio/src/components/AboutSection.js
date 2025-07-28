import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>
          <p>
            Full-stack student at Code College with hands-on experience in software development. 
            Proficient in React, Node.js, Python, and MongoDB with a track record of delivering web applications 
            from concept to deployment.
          </p>
          <p>
            Always seeking to expand my skill set and stay updated with the latest technologies. 
            So, please, challenge me with your projects.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;