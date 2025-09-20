import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import ProjectTabs from '../components/ProjectTabs';
import ProjectOverview from '../components/ProjectOverview';
import ProjectMedia from '../components/ProjectMedia';
import ProjectCode from '../components/ProjectCode';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-detail error">
        <div className="error-content">
          <h2>Progetto non trovato</h2>
          <p>Il progetto che stai cercando non esiste o è stato rimosso.</p>
          <Link to="/pages/portfolio" className="back-link">
            ← Torna al Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProjectOverview project={project} />;
      case 'media':
        return <ProjectMedia project={project} />;
      case 'code':
        return <ProjectCode project={project} />;
      default:
        return <ProjectOverview project={project} />;
    }
  };

  return (
    <div className="project-detail">
      <div className="project-header">
        <div className="header-content">
          <Link to="/pages/portfolio" className="back-link">
            ← Portfolio
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