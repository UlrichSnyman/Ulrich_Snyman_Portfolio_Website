import React from 'react';

function PortfolioNav() {
  const handleNavigate = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e, targetId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleNavigate(e, targetId);
    }
  };

  return (
    <nav className="portfolio-nav animate-slide-in" role="navigation" aria-label="Portfolio navigation">
      <a href="#profile" tabIndex="0" onClick={(e) => handleNavigate(e, 'profile')} onKeyDown={(e) => handleKeyDown(e, 'profile')} aria-label="Navigate to Profile section">Profile</a>
      <a href="#projects" tabIndex="0" onClick={(e) => handleNavigate(e, 'projects')} onKeyDown={(e) => handleKeyDown(e, 'projects')} aria-label="Navigate to Projects section">Projects</a>
      <a href="#skills" tabIndex="0" onClick={(e) => handleNavigate(e, 'skills')} onKeyDown={(e) => handleKeyDown(e, 'skills')} aria-label="Navigate to Skills section">Skills</a>
    </nav>
  );
}

export default PortfolioNav;
