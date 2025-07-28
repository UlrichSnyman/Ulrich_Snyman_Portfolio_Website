import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';
import FloatingNav from './FloatingNav';
import AboutSection from './AboutSection';

function MainPage() {
  return (
    <>
      <FloatingNav />
      <ProfileSection />
      <PortfolioNav />
      <AboutSection />
      <PortfolioSection />
      <TechnologiesBanner />
      <CertificatesSection />
    </>
  );
}

export default MainPage;
