import React, { useEffect, useRef } from 'react';

// This component mounts a canvas and runs the fluid animation from public/fluid.js
const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/fluid.js';
    script.async = true;
    script.onload = () => {
      if (window.initFluid && canvasRef.current) {
        window.initFluid(canvasRef.current);
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <canvas
      id="fluid-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}
    />
  );
};

export default FluidBackground;
