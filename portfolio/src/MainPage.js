import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';
import FluidBackground from './FluidBackground';
import FloatingNav from './FloatingNav';

function MainPage() {  return (
    <>
      <FluidBackground />
      <FloatingNav />
      <ProfileSection />
      <PortfolioNav />      <section id="about" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>About Me</h3>
          <p>Welcome to my portfolio! I am a passionate developer with a love for building beautiful and functional web applications.</p>
        </div>
      </section>
      <section id="projects" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h2>Projects</h2>
          <PortfolioSection />
        </div>
      </section>
      <TechnologiesBanner />
      <CertificatesSection />
      <section id="contact" className="portfolio-section styled-section animate-fade-in">
        <div className="content-wrapper">
          <h3>Contact</h3>
          <p>Let's work together! You can reach me at:</p>
          <div className="contact-info">
            <p>Email: ulrichsnyman2006@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ulrich-snyman-a5a980368/" target="_blank" rel="noopener noreferrer">Ulrich Snyman</a></p>
            <p>GitHub: <a href="https://github.com/Thefirstxerg" target="_blank" rel="noopener noreferrer">Thefirstxerg</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
