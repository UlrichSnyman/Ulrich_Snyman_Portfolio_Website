import React from 'react';
import { professionalSkills } from '../data/portfolioData';

/**
 * ProfessionalSkillsSection
 *
 * Renders the professional / soft-skill groups defined in portfolioData.js.
 * To add or update a skill group, edit the `professionalSkills` array in
 * src/data/portfolioData.js — no changes to this component are needed.
 */
function ProfessionalSkillsSection() {
  return (
    <section id="professional-skills" className="portfolio-section styled-section animate-fade-in">
      <div className="content-wrapper">
        <h3>Professional &amp; Support Skills</h3>
        <p className="section-subtitle">
          Workplace and soft skills complementing the development technology stack below.
        </p>
        <div className="professional-skills-grid">
          {professionalSkills.map((group) => (
            <div key={group.title} className="professional-skill-card">
              <div className="skill-card-header">
                <span className="skill-card-icon" aria-hidden="true">{group.icon}</span>
                <h4 className="skill-card-title">{group.title}</h4>
              </div>
              <ul className="skill-card-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSkillsSection;
