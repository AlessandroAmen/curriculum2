import React from 'react';
import './ProjectComponents.css';

const ProjectMedia = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-media">
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="media-section">
          <h3>📷 Screenshots</h3>
          <div className="screenshots-grid">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-item">
                <img 
                  src={screenshot.url} 
                  alt={screenshot.alt}
                  className="screenshot-image"
                />
                <p className="screenshot-caption">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.videos && project.videos.length > 0 && (
        <div className="media-section">
          <h3>🎥 Video Demo</h3>
          <div className="videos-grid">
            {project.videos.map((video, index) => (
              <div key={index} className="video-item">
                <div className="video-placeholder">
                  <span className="video-icon">▶️</span>
                  <p className="video-title">{video.title}</p>
                  <p className="video-description">{video.description}</p>
                  <button className="video-play-btn">
                    Guarda Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {(!project.screenshots || project.screenshots.length === 0) && 
       (!project.videos || project.videos.length === 0) && (
        <div className="no-media">
          <div className="no-media-placeholder">
            <span className="no-media-icon">📷</span>
            <h3>Media in arrivo</h3>
            <p>Screenshots e video demo saranno aggiunti presto per questo progetto.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectMedia;