import React from 'react';
import './ProjectComponents.css';
import { getTechColor } from '../data/helpers/projectHelpers';

const ProjectOverview = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-overview">
      <div className="overview-grid">
        <div className="overview-main">
          <h2>{project.title}</h2>
          <p className="project-description">{project.detailedDescription}</p>
          
          <div className="project-objective">
            <h3>🎯 Obiettivo</h3>
            <p>{project.objective}</p>
          </div>

          <div className="project-features">
            <h3>✨ Funzionalità Principali</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.note && (
            <div className="project-note">
              <h3>📝 Note</h3>
              <p>{project.note}</p>
            </div>
          )}
        </div>

        <div className="overview-sidebar">
          <div className="project-info-card">
            <h3>Informazioni Progetto</h3>
            
            <div className="info-item">
              <span className="info-label">Categoria:</span>
              <span className="info-value">{project.category}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Tecnologie:</span>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-tag"
                    style={{ 
                      backgroundColor: getTechColor(tech),
                      color: getTechColor(tech) === '#F7DF1E' ? '#000000' : '#FFFFFF' 
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.frontendLink && (
                <a href={project.frontendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span className="link-text">Frontend</span>
                </a>
              )}
              {project.backendLink && (
                <a href={project.backendLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span className="link-text">Backend</span>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                  <span className="link-text">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {(project.challenges || project.learnings) && (
            <div className="learning-card">
              {project.challenges && (
                <div className="challenges">
                  <h4>🎯 Sfide Affrontate</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learnings && (
                <div className="learnings">
                  <h4>📚 Cosa Ho Imparato</h4>
                  <ul>
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;