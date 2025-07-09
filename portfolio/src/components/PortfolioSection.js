import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React featuring fluid animations and responsive design.",
    technologies: ["React", "JavaScript", "CSS", "WebGL", "HTML"],
    imageUrl: require('../assets/images/portfolio_project.png'),
    projectUrl: "https://ulsnportfolio.netlify.app",
    githubUrl: "https://github.com/Thefirstxerg/Ulrich_Snyman_Portfolio_Website"
  },
  {
    title: "Fluid Sim Project",
    description: "A real-time fluid simulation built with JavaScript and WebGL. Explore interactive fluid dynamics in your browser!",
    technologies: ["JavaScript", "WebGL", "HTML", "CSS", "HTML"],
    imageUrl: require('../assets/images/Fluid_Sim.png'),
    projectUrl: "https://thefirstxerg.github.io/Ulrich_Snyman_Portfolio_Website/Projects/Fluid%20Sim/index.html",
    githubUrl: "https://github.com/Thefirstxerg/Ulrich_Snyman_Portfolio_Website/tree/main/Projects/Fluid%20Sim"
  },
  {
    title: "Cohort Randomizer",
    description: "A web application for randomizing student cohorts, built with Django and Python, featuring a modern interface using JavaScript and HTMX.",
    technologies: ["Python", "Django", "JavaScript", "HTMX", "CSS"],
    imageUrl: require('../assets/images/Cohort_Randomizer.png'),
    projectUrl: "https://django-cre-project.onrender.com",
    githubUrl: "https://github.com/Thefirstxerg/Django-CRE-Project"
  },
  {
    title: "Firetrack",
    description: "A Firebase-based task manager app (to-do list) with full CRUD functionality. Organize and track your tasks in real time.",
    technologies: ["React", "Firebase", "JavaScript", "CSS", "HTML"],
    imageUrl: require('../assets/images/firebase.png'),
    projectUrl: "https://firebasefiretrack.netlify.app",
    githubUrl: "https://github.com/Thefirstxerg/React-Firebase-Project"
  },
  {
    title: "Movie Review App",
    description: " A movie review application built with Django and React, allowing users to browse, review, and rate movies.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "MongoDB", "Mongoose", "Express", "Axios"],
    imageUrl: require('../assets/images/Movie_Review.png'),
    projectUrl: "https://mern-movie-frontend-uhxq.onrender.com",
    githubUrl: "https://github.com/Thefirstxerg/MERN/tree/main/Code"},
  {
    title: "GraphQL React App (Work in Progress)",
    description: "A React application utilizing GraphQL for data fetching, showcasing modern web development practices.",
    technologies: ["React", "GraphQL", "JavaScript", "Express", "HTML", "MongoDB", "Mongoose", "BCryptJS"],
    imageUrl: require('../assets/images/GraphQL.png'),
    projectUrl: "https://graphql-react-app.netlify.app",
    githubUrl: ""}
];

function PortfolioSection() {
  return (
    <section id="projects" className="portfolio-section styled-section animate-fade-in">
      <div className="content-wrapper">
        <h2>Projects</h2>
        <div className="projects-scroll-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
