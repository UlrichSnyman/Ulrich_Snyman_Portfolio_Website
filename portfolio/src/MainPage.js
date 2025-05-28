import React, { useEffect } from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';

function MainPage() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = 'cursor-effect';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let hue = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw a soft radial gradient following the cursor
      const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
      grad.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.25)`);
      grad.addColorStop(0.4, `hsla(${(hue+30)%360}, 80%, 40%, 0.12)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 180, 0, 2 * Math.PI);
      ctx.fill();
    }

    function animate() {
      // Smoothly follow the cursor
      lastX += (mouseX - lastX) * 0.18;
      lastY += (mouseY - lastY) * 0.18;
      hue = (hue + 1) % 360;
      ctx.clearRect(0, 0, width, height);
      const grad = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 180);
      grad.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.22)`);
      grad.addColorStop(0.4, `hsla(${(hue+30)%360}, 80%, 40%, 0.10)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(lastX, lastY, 180, 0, 2 * Math.PI);
      ctx.fill();
      requestAnimationFrame(animate);
    }
    animate();

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <>
      <ProfileSection />
      <PortfolioNav />
      <PortfolioSection />
      <TechnologiesBanner />
      <CertificatesSection />
    </>
  );
}

export default MainPage;
