import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './ProjectComponents.css';

const ProjectTabs = ({ activeTab, onTabChange, project }) => {
  const { t } = useTranslation();
  const tabs = [
    { id: 'overview', label: t('projectDetail.tabs.overview'), icon: '📋' },
    { id: 'code', label: t('projectDetail.tabs.code'), icon: '💻' }
  ];

  return (
    <div className="project-tabs">
      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="tab-indicator">
        <div 
          className="indicator-line"
          style={{
            transform: `translateX(${tabs.findIndex(tab => tab.id === activeTab) * 100}%)`
          }}
        />
      </div>
    </div>
  );
};

export default ProjectTabs;