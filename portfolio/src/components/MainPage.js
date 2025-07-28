import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';
import FloatingNav from './FloatingNav';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

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
      <ContactSection />
    </>
  );
}

export default MainPage;
