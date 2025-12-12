import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import { translateProject } from '../data/helpers/translateProject';
import ProjectTabs from '../components/ProjectTabs';
import ProjectOverview from '../components/ProjectOverview';
import ProjectCode from '../components/ProjectCode';
import { useTranslation } from '../hooks/useTranslation';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const { t, currentLanguage } = useTranslation();
  
  const projectRaw = getProjectBySlug(slug);
  const project = projectRaw ? translateProject(projectRaw, currentLanguage) : null;

  if (!project) {
    return (
      <div className="project-detail error">
        <div className="error-content">
          <h2>{t('projectDetail.notFound.title')}</h2>
          <p>{t('projectDetail.notFound.description')}</p>
          <Link to="/pages/portfolio" className="back-link">
            {t('projectDetail.notFound.backLink')}
          </Link>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProjectOverview project={project} />;
      case 'code':
        return <ProjectCode project={project} />;
      default:
        return <ProjectOverview project={project} />;
    }
  };

  return (
    <div className="project-detail">
      <div className="project-header">
        {project.image && (
          <div className="project-cover">
            <img src={project.image} alt={project.title} />
            <div className="cover-overlay"></div>
          </div>
        )}
        <div className="header-content">
          <Link to="/pages/portfolio" className="back-link">
            <span className="back-arrow">←</span>
            <span className="back-text">{t('projectDetail.back')}</span>
          </Link>
          <div className="project-title-section">
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
          </div>
        </div>
      </div>

      <ProjectTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        project={project}
      />

      <div className="project-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectDetail;