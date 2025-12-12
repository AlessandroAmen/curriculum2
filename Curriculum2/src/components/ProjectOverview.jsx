import React from 'react';
import './ProjectComponents.css';
import { getTechColor } from '../data/helpers/projectHelpers';
import { useTranslation } from '../hooks/useTranslation';

const ProjectOverview = ({ project }) => {
  const { t } = useTranslation();
  if (!project) return null;

  // Funzione per renderizzare link cliccabili nella descrizione
  const renderDescriptionWithLinks = (description) => {
    if (!description) return description;
    
    // Pattern per rilevare URL
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = description.split(urlPattern);
    
    return parts.map((part, index) => {
      if (part.match(urlPattern)) {
        // Determina il testo del link in base al tipo di URL e lingua
        let linkText = 'Video demo';
        if (part.includes('linkedin.com')) {
          linkText = t('projectOverview.videoLink') || '🎥 Guarda il video su LinkedIn';
        } else if (part.includes('youtube.com') || part.includes('youtu.be')) {
          linkText = t('projectOverview.youtubeLink') || '🎥 Guarda il video su YouTube';
        } else {
          linkText = t('projectOverview.genericLink') || '🔗 Vai al link';
        }
        
        return (
          <React.Fragment key={index}>
            {' '}
            <a 
              href={part} 
              target="_blank" 
              rel="noopener noreferrer"
              className="description-link"
            >
              {linkText}
            </a>
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="project-overview">
      <div className="overview-grid">
        <div className="overview-main">
          <h2>{project.title}</h2>
          <p className="project-description">
            {renderDescriptionWithLinks(project.detailedDescription)}
          </p>
          
          <div className="project-objective">
            <h3>{t('projectOverview.objective')}</h3>
            <p>{project.objective}</p>
          </div>

          <div className="project-features">
            <h3>{t('projectOverview.features')}</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.note && (
            <div className="project-note">
              <h3>{t('projectOverview.note')}</h3>
              <p>{project.note}</p>
            </div>
          )}
        </div>

        <div className="overview-sidebar">
          <div className="project-info-card">
            <h3>{t('projectOverview.projectInfo')}</h3>
            
            <div className="info-item">
              <span className="info-label">{t('projectOverview.category')}</span>
              <span className="info-value">{project.category}</span>
            </div>

            <div className="info-item">
              <span className="info-label">{t('projectOverview.technologies')}</span>
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
                  <h4>{t('projectOverview.challenges')}</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learnings && (
                <div className="learnings">
                  <h4>{t('projectOverview.learnings')}</h4>
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