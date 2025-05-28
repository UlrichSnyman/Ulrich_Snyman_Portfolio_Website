import React from 'react';

function PortfolioSection() {
  return (
    <>
      <h2 className="portfolio-title animate-fade-in">Portfolio</h2>
      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <h3>About Me</h3>
        <p>Welcome to my portfolio! I am a passionate developer with a love for building beautiful and functional web applications.</p>
      </section>
      <section id="contact" className="portfolio-section styled-section animate-fade-in">
        <h3>Contact</h3>
        <p>Email: ulrich@example.com</p>
      </section>
    </>
  );
}

export default PortfolioSection;
