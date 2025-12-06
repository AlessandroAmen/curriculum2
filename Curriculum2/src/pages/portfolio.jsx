import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData, getTechColor } from '../data/projectsData';
import './portfolio.css';

function Portfolio() {
  // Separare progetti freelance da progetti personali
  const freelanceProjects = projectsData.filter(project => 
    project.slug === 'ecosys' || project.slug === 'assicurazione-gestionale'
  );
  
  const personalProjects = projectsData.filter(project => 
    project.slug !== 'ecosys' && project.slug !== 'assicurazione-gestionale'
  );

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="tech-tag" 
              style={{ backgroundColor: getTechColor(tech) }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          <Link to={`/pages/portfolio/${project.slug}`} className="project-link details-link">
            Scopri tutto
          </Link>
          {project.frontendLink && (
            <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Frontend
            </a>
          )}
          {project.backendLink && (
            <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Backend
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>I Miei Progetti</h1>
        <p>
          Una raccolta dei progetti che ho sviluppato per dimostrare le mie competenze 
          in diverse tecnologie e framework.
        </p>
      </div>

      {/* Sezione Progetti Freelance */}
      <div className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">Progetti Freelance</h2>
          <p className="section-subtitle">Progetti reali sviluppati per clienti come freelancer</p>
        </div>
        <div className="projects-grid">
          {freelanceProjects.map(project => renderProjectCard(project))}
        </div>
      </div>

      {/* Sezione Progetti Personali */}
      <div className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">Progetti Personali</h2>
          <p className="section-subtitle">Progetti sviluppati per apprendimento e crescita personale</p>
        </div>
        <div className="projects-grid">
          {personalProjects.map(project => renderProjectCard(project))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;