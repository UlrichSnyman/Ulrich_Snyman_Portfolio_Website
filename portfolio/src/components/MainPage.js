import React from 'react';
import ProfileSection from './ProfileSection';
import PortfolioNav from './PortfolioNav';
import PortfolioSection from './PortfolioSection';
import SkillsAndCertsSection from './SkillsAndCertsSection';
import FloatingNav from './FloatingNav';

function MainPage() {
  return (
    <>
      <FloatingNav />
      <main id="main-content"> {/* Added id for skip link
                                   Used for screen readers and seo*/}
        <ProfileSection />
        <PortfolioNav />
        <PortfolioSection />
        <SkillsAndCertsSection />
      </main>
    </>
  );
}

export default MainPage;
