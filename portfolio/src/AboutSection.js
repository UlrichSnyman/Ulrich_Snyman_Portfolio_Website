import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>          <p>
            Full-Stack Developer and Software Engineering student that likes building innovative web solutions. 
            Skilled in React, Node.js, and Python, I create responsive applications that combine clean interfaces with 
            robust backend systems.
          </p>
          <p>
            Currently at Code College, working on projects ranging from web apps to database systems. 
            Always excited to tackle new challenges and turn ideas into reality and learn from the experience. 
            So please, Challenge Me.
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;