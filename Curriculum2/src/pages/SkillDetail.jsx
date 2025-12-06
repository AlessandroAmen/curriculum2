import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Navskill from '../components/Navskill';
import './SkillDetail.css';

const SkillDetail = () => {
  const { nome } = useParams(); 
  const navigate = useNavigate();
  const languages = useSelector(state => state.languages);
  const [activeTab, setActiveTab] = useState('concetti');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const language = languages.find(lang => lang.nome.toLowerCase() === nome);

  if (!language) {
    return (
      <div className="skill-detail-page">
        <Navskill />
        <div className="not-found">
          <h2>❌ Skill non trovata</h2>
          <button onClick={() => navigate('/pages/skill')} className="back-button">
            ← Torna alle Skills
          </button>
        </div>
      </div>
    );
  }

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getTechIcon = (techName) => {
    const icons = {
      'HTML': '🌐',
      'CSS': '🎨', 
      'JavaScript': '⚡',
      'PHP': '🐘',
      'Python': '🐍',
      'SQL': '💾',
      'MySQL': '🗄️',
      'Node.js': '🟢',
      'Express.js': '🚀',
      'React': '⚛️',
      'Vue': '💚',
      'Laravel': '🔥',
      'TypeScript': '💙',
      'Next.js': '▲',
      'Tailwind': '🎐'
    };
    return icons[techName] || '💻';
  };

  return (
    <div className="skill-detail-page">
      <Navskill />
      
      <div className="skill-detail-container">
        {/* Header */}
        <div className="skill-header">
          <button onClick={() => navigate('/pages/skill')} className="back-button">
            ← Torna alle Skills
          </button>
          <div className="skill-title-section">
            <span className="skill-icon-large">{getTechIcon(language.nome)}</span>
            <div>
              <h1 className="skill-name-large">{language.nome}</h1>
              <p className="skill-description">{language.descrizione}</p>
              <div className="skill-level-badge">Competenza: {language.percentuale}</div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-navigation">
          <button 
            className={`tab-button ${activeTab === 'concetti' ? 'active' : ''}`}
            onClick={() => setActiveTab('concetti')}
          >
            📚 Concetti Chiave
          </button>
          <button 
            className={`tab-button ${activeTab === 'esempi' ? 'active' : ''}`}
            onClick={() => setActiveTab('esempi')}
          >
            💻 Esempi di Codice
          </button>
          <button 
            className={`tab-button ${activeTab === 'esercizi' ? 'active' : ''}`}
            onClick={() => setActiveTab('esercizi')}
          >
            🎯 Esercizi Pratici
          </button>
          <button 
            className={`tab-button ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            💡 Tips per Coding Test
          </button>
        </div>

        {/* Content */}
        <div className="tab-content">
          {/* Concetti Chiave */}
          {activeTab === 'concetti' && language.concettiChiave && (
            <div className="concetti-section">
              <h2>📚 Concetti Fondamentali</h2>
              {language.concettiChiave.map((concetto, index) => (
                <div key={index} className="concetto-card">
                  <h3>{concetto.titolo}</h3>
                  <p>{concetto.spiegazione}</p>
                  {concetto.punti && (
                    <ul>
                      {concetto.punti.map((punto, i) => (
                        <li key={i}>{punto}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Esempi di Codice */}
          {activeTab === 'esempi' && language.esempiCodice && (
            <div className="esempi-section">
              <h2>💻 Esempi Pratici</h2>
              {language.esempiCodice.map((esempio, index) => (
                <div key={index} className="esempio-card">
                  <div className="esempio-header">
                    <h3>{esempio.titolo}</h3>
                    <button 
                      className="copy-button"
                      onClick={() => copyToClipboard(esempio.codice, index)}
                    >
                      {copiedIndex === index ? '✅ Copiato!' : '📋 Copia'}
                    </button>
                  </div>
                  {esempio.descrizione && <p className="esempio-desc">{esempio.descrizione}</p>}
                  <pre className="code-block">
                    <code>{esempio.codice}</code>
                  </pre>
                  {esempio.output && (
                    <div className="code-output">
                      <strong>Output:</strong>
                      <pre>{esempio.output}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Esercizi Pratici */}
          {activeTab === 'esercizi' && language.esercizi && (
            <div className="esercizi-section">
              <h2>🎯 Mettiti alla Prova</h2>
              {language.esercizi.map((esercizio, index) => (
                <div key={index} className="esercizio-card">
                  <div className="esercizio-number">Esercizio {index + 1}</div>
                  <h3>{esercizio.titolo}</h3>
                  <p className="esercizio-desc">{esercizio.descrizione}</p>
                  {esercizio.requisiti && (
                    <div className="esercizio-requisiti">
                      <strong>Requisiti:</strong>
                      <ul>
                        {esercizio.requisiti.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {esercizio.suggerimento && (
                    <details className="esercizio-hint">
                      <summary>💡 Suggerimento</summary>
                      <p>{esercizio.suggerimento}</p>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tips per Coding Test */}
          {activeTab === 'tips' && language.codingTestTips && (
            <div className="tips-section">
              <h2>💡 Come Affrontare i Coding Test</h2>
              {language.codingTestTips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-icon">💡</div>
                  <div className="tip-content">
                    <h3>{tip.titolo}</h3>
                    <p>{tip.contenuto}</p>
                    {tip.esempio && (
                      <pre className="tip-esempio">
                        <code>{tip.esempio}</code>
                      </pre>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Messaggio se non ci sono contenuti */}
          {!language[
            activeTab === 'concetti' ? 'concettiChiave' :
            activeTab === 'esempi' ? 'esempiCodice' :
            activeTab === 'esercizi' ? 'esercizi' : 'codingTestTips'
          ] && (
            <div className="no-content">
              <p>📝 Contenuti in fase di preparazione...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;