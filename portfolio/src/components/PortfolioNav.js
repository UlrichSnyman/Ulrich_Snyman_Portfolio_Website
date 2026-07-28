import React from 'react';

function PortfolioNav() {
  const handleKeyDown = (e, targetId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="portfolio-nav animate-slide-in" role="navigation" aria-label="Portfolio navigation">
      <a href="#about" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'about')} aria-label="Navigate to About section">About</a>
      <a href="#projects" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'projects')} aria-label="Navigate to Projects section">Projects</a>
      <a href="#professional-skills" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'professional-skills')} aria-label="Navigate to Professional Skills section">Professional Skills</a>
      <a href="#skills" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'skills')} aria-label="Navigate to Technologies section">Technologies</a>
    </nav>
  );
}

export default PortfolioNav;
