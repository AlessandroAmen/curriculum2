import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, getProjectsByCategory } from '../data/projectsData';
import './portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = getProjectsByCategory(activeFilter);

  const categories = [
    { key: 'all', label: 'Tutti i Progetti' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Fullstack' }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>I Miei Progetti</h1>
        <p>
          Una raccolta dei progetti che ho sviluppato per dimostrare le mie competenze 
          in diverse tecnologie e framework.
        </p>
      </div>

      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category.key}
            className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <Link to={`/pages/portfolio/${project.slug}`} className="view-details">
                  Vedi Dettagli
                </Link>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-more">+{project.technologies.length - 3}</span>
                )}
              </div>
              
              <div className="project-links">
                {project.frontendLink && (
                  <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>🔗</span> Frontend
                  </a>
                )}
                {project.backendLink && (
                  <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>⚙️</span> Backend
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <span>🚀</span> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <h3>Nessun progetto trovato</h3>
          <p>Non ci sono progetti per la categoria selezionata.</p>
        </div>
      )}
    </div>
  );
}

export default Portfolio;