import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the original nav's position (you might need to adjust this value)
      const triggerHeight = window.innerHeight * 0.4; 
      const show = window.scrollY > triggerHeight;
      setVisible(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyDown = (e, targetId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`floating-nav ${visible ? 'visible' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-content">
        <div className="nav-brand">Ulrich Snyman</div>
        <div className="nav-links">
          <a href="#about" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'about')} aria-label="Navigate to About section">About</a>
          <a href="#projects" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'projects')} aria-label="Navigate to Projects section">Projects</a>
          <a href="#skills" tabIndex="0" onKeyDown={(e) => handleKeyDown(e, 'skills')} aria-label="Navigate to Skills section">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
