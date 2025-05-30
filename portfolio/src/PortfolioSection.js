import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React featuring fluid animations and responsive design.",
    technologies: ["React", "JavaScript", "CSS", "WebGL"],
    imageUrl: "/portfolio-preview.png",
    projectUrl: "https://ulsnportfolio.netlify.app",
    githubUrl: "https://github.com/Thefirstxerg/Ulrich_Snyman_Portfolio_Website"
  },
  {
    title: "MySQL Database Project",
    description: "A comprehensive database management system with CRUD operations.",
    technologies: ["MySQL", "PHP", "HTML", "CSS"],
    imageUrl: "/mysql-preview.png",
    githubUrl: "https://github.com/ulrichsnyman/mysql-project"
  },
  {
    title: "Delphi Application",
    description: "A desktop application built with Delphi featuring modern UI and efficient data processing.",
    technologies: ["Delphi", "SQL", "Object Pascal"],
    imageUrl: "/delphi-preview.png",
    githubUrl: "https://github.com/Thefirstxerg/Delphi-PAT"
  }
];

function PortfolioSection() {
  return (
    <section id="projects" className="portfolio-section styled-section animate-fade-in">
      <div className="content-wrapper">
        <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
          </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
