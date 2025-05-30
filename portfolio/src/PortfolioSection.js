import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React featuring fluid animations and responsive design.",
    technologies: ["React", "JavaScript", "CSS", "WebGL"],
    imageUrl: "/portfolio-preview.png",
    projectUrl: "https://ulrichsnyman.com",
    githubUrl: "https://github.com/ulrichsnyman/portfolio"
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
    githubUrl: "https://github.com/ulrichsnyman/delphi-project"
  }
];

function PortfolioSection() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default PortfolioSection;
