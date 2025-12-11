import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData, getTechColor } from '../data/projectsData';
import { translateProject } from '../data/helpers/translateProject';
import { useTranslation } from '../hooks/useTranslation';
import './portfolio.css';

function Portfolio() {
  const { t, currentLanguage } = useTranslation();
  // Separare progetti freelance da progetti personali
  const freelanceProjects = projectsData.filter(project => 
    project.slug === 'ecosys' || project.slug === 'assicurazione-gestionale'
  );
  
  const personalProjects = projectsData.filter(project => 
    project.slug !== 'ecosys' && project.slug !== 'assicurazione-gestionale'
  );

  const renderProjectCard = (project) => {
    const translatedProject = translateProject(project, currentLanguage);
    return (
    <div key={project.id} className="project-card">
      <div className="project-image">
        <img src={translatedProject.image} alt={translatedProject.title} />
      </div>
      
      <div className="project-content">
        <div className="project-category">{translatedProject.category}</div>
        <h3 className="project-title">{translatedProject.title}</h3>
        <p className="project-description">{translatedProject.description}</p>
        
        <div className="project-tech">
          {translatedProject.technologies.map((tech, index) => (
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
          <Link to={`/pages/portfolio/${translatedProject.slug}`} className="project-link details-link">
            {t('portfolio.discover')}
          </Link>
          {translatedProject.frontendLink && (
            <a href={translatedProject.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              {t('portfolio.frontend')}
            </a>
          )}
          {translatedProject.backendLink && (
            <a href={translatedProject.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
              {t('portfolio.backend')}
            </a>
          )}
          {translatedProject.liveLink && (
            <a href={translatedProject.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              {t('portfolio.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
  };

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>{t('portfolio.title')}</h1>
        <p>
          {t('portfolio.description')}
        </p>
      </div>

      {/* Sezione Progetti Freelance */}
      <div className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">{t('portfolio.freelance.title')}</h2>
          <p className="section-subtitle">{t('portfolio.freelance.subtitle')}</p>
        </div>
        <div className="projects-grid">
          {freelanceProjects.map(project => renderProjectCard(project))}
        </div>
      </div>

      {/* Sezione Progetti Personali */}
      <div className="portfolio-section">
        <div className="section-header">
          <h2 className="section-title">{t('portfolio.personal.title')}</h2>
          <p className="section-subtitle">{t('portfolio.personal.subtitle')}</p>
        </div>
        <div className="projects-grid">
          {personalProjects.map(project => renderProjectCard(project))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;