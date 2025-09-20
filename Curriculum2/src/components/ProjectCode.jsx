import React, { useState } from 'react';
import './ProjectComponents.css';

const ProjectCode = ({ project }) => {
  const [activeSnippet, setActiveSnippet] = useState(0);

  if (!project || !project.codeSnippets || project.codeSnippets.length === 0) {
    return (
      <div className="project-code">
        <div className="no-code">
          <div className="no-code-placeholder">
            <span className="no-code-icon">💻</span>
            <h3>Codice in arrivo</h3>
            <p>Esempi di codice e snippet saranno aggiunti presto per questo progetto.</p>
          </div>
        </div>
      </div>
    );
  }

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      // Potresti aggiungere una notifica qui
      console.log('Codice copiato negli appunti!');
    });
  };

  return (
    <div className="project-code">
      <div className="code-navigation">
        <h3>💻 Esempi di Codice</h3>
        <div className="code-tabs">
          {project.codeSnippets.map((snippet, index) => (
            <button
              key={index}
              className={`code-tab ${activeSnippet === index ? 'active' : ''}`}
              onClick={() => setActiveSnippet(index)}
            >
              {snippet.title}
            </button>
          ))}
        </div>
      </div>

      <div className="code-content">
        {project.codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className={`code-snippet ${activeSnippet === index ? 'active' : ''}`}
          >
            <div className="code-header">
              <div className="code-info">
                <h4>{snippet.title}</h4>
                <span className="code-language">{snippet.language}</span>
              </div>
              <button
                className="copy-button"
                onClick={() => copyToClipboard(snippet.code)}
                title="Copia codice"
              >
                📋
              </button>
            </div>
            <div className="code-block">
              <pre>
                <code className={`language-${snippet.language}`}>
                  {snippet.code}
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <div className="code-explanation">
        <h4>🔍 Spiegazione</h4>
        <p>
          Questi esempi di codice mostrano le implementazioni chiave del progetto. 
          Ogni snippet è stato selezionato per dimostrare le competenze tecniche 
          e i pattern architetturali utilizzati.
        </p>
      </div>
    </div>
  );
};

export default ProjectCode;