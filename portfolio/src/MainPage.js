import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';
import FluidBackground from './FluidBackground';

function MainPage() {
  return (
    <>
      <FluidBackground />
      <ProfileSection />
      <PortfolioNav />
      <PortfolioSection />
      <TechnologiesBanner />
      <CertificatesSection />
    </>
  );
}

export default MainPage;
