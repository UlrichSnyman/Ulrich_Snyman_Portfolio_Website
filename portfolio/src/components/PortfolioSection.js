import React, { useState, useMemo } from 'react';
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
    technologies: ["JavaScript", "WebGL", "HTML", "CSS"],
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
    githubUrl: "https://github.com/Thefirstxerg/MERN/tree/main/Code"
  },
  {
    title: "GraphQL React App",
    description: "A React application utilizing GraphQL for data fetching, showcasing modern web development practices.",
    technologies: ["React", "GraphQL", "JavaScript", "Express", "HTML", "MongoDB", "Mongoose", "Axios", "CSS"],
    imageUrl: require('../assets/images/GraphQL.png'),
    projectUrl: "https://ulsngraphqldemo.netlify.app/",
    githubUrl: "https://github.com/Thefirstxerg/GraphQL_React"
  },
  {
    title: "MERN Collaborative Canvas",
    description: "A collaborative drawing application built with the MERN stack, allowing real-time drawing and sharing. The entire Canvas is stored within MongoDB.",
    technologies: ["React", "Express", "MongoDB", "Mongoose", "JavaScript", "HTML", "CSS", "Websockets"],
    imageUrl: require('../assets/images/MERN_Canvas.png'),
    projectUrl: "https://ulsncoca.netlify.app",
    githubUrl: "https://github.com/Thefirstxerg/MERN-Collaborative-Canvas"
  }
];

function PortfolioSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search term and selected technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTechnology = selectedTechnology === '' || 
                               project.technologies.includes(selectedTechnology);
      return matchesSearch && matchesTechnology;
    });
  }, [searchTerm, selectedTechnology]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTechnologyFilter = (technology) => {
    setSelectedTechnology(selectedTechnology === technology ? '' : technology);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTechnology('');
  };

  return (
    <section id="projects" className="portfolio-section styled-section animate-fade-in">
      <div className="content-wrapper">
        <h2>Projects</h2>
        
        {/* Search and Filter Controls */}
        <div className="project-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <div className="filter-label">Filter by technology:</div>
            <div className="technology-filters">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechnologyFilter(tech)}
                  className={`filter-btn ${selectedTechnology === tech ? 'active' : ''}`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {(searchTerm || selectedTechnology) && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="results-info">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
        
        <div className="projects-scroll-container">
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            ) : (
              <div className="no-results">
                <p>No projects found matching your criteria.</p>
                <button onClick={clearFilters} className="clear-filters-btn">
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
