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
  const [filtersExpanded, setFiltersExpanded] = useState(false);

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
    setFiltersExpanded(false);
  };
  
  const toggleFilters = () => {
    setFiltersExpanded(!filtersExpanded);
  };

  return (
    <section id="projects" className="portfolio-section styled-section animate-fade-in">
      <div className="content-wrapper">
        <h2>Projects</h2>
        
        {/* Search and Filter Controls */}
        <div className="project-controls-compact">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input-compact"
            />
            <button 
              onClick={toggleFilters} 
              className={`filter-toggle-btn ${filtersExpanded ? 'active' : ''}`}
              aria-label="Toggle technology filters"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Filters
            </button>
            {(searchTerm || selectedTechnology) && (
              <button onClick={clearFilters} className="clear-btn-compact">
                ✕
              </button>
            )}
          </div>
          
          {filtersExpanded && (
            <div className="technology-filters-expanded">
              {allTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechnologyFilter(tech)}
                  className={`filter-chip ${selectedTechnology === tech ? 'active' : ''}`}
                >
                  {tech}
                </button>
              ))}
            </div>
          )}
          
          {selectedTechnology && (
            <div className="active-filter-tag">
              Filtered: <strong>{selectedTechnology}</strong>
            </div>
          )}
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
