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

  return (
    <nav className={`floating-nav ${visible ? 'visible' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">Ulrich Snyman</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
