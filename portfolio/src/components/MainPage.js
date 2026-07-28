import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import TechnologiesBanner from './TechnologiesBanner';
import CertificatesSection from './CertificatesSection';
import FloatingNav from './FloatingNav';
import AboutSection from './AboutSection';
import ProfessionalSkillsSection from './ProfessionalSkillsSection';

function MainPage() {
  return (
    <>
      <FloatingNav />
      <main id="main-content"> {/* Added id for skip link
                                   Used for screen readers and seo*/}
        <ProfileSection />
        <PortfolioNav />
        <AboutSection />
        <PortfolioSection />
        <ProfessionalSkillsSection />
        <TechnologiesBanner />
        <CertificatesSection />
      </main>
    </>
  );
}

export default MainPage;
