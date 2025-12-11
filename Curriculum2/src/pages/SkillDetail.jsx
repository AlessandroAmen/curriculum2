import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Navskill from '../components/Navskill';
import { useTranslation } from '../hooks/useTranslation';
import { translateSkill } from '../data/helpers/translateSkill';
import './SkillDetail.css';

const SkillDetail = () => {
  const { nome } = useParams(); 
  const navigate = useNavigate();
  const languagesRaw = useSelector(state => state.languages);
  const { t, currentLanguage } = useTranslation();
  const [activeTab, setActiveTab] = useState('concetti');
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Traduci le skills in base alla lingua corrente
  const languages = useMemo(() => {
    return languagesRaw.map(skill => translateSkill(skill, currentLanguage));
  }, [languagesRaw, currentLanguage]);

  const language = languages.find(lang => lang.nome.toLowerCase() === nome);

  if (!language) {
    return (
      <div className="skill-detail-page">
        <Navskill />
        <div className="not-found">
          <h2>{t('skillDetail.notFound.title')}</h2>
          <button onClick={() => navigate('/pages/skill')} className="back-button">
            {t('skillDetail.notFound.back')}
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
            ← {t('skillDetail.notFound.back')}
          </button>
          <div className="skill-title-section">
            <span className="skill-icon-large">{getTechIcon(language.nome)}</span>
            <div>
              <h1 className="skill-name-large">{language.nome}</h1>
              <p className="skill-description">{language.descrizione}</p>
              <div className="skill-level-badge">{t('skills.levelLabel')} {language.percentuale}</div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-navigation">
          <button 
            className={`tab-button ${activeTab === 'concetti' ? 'active' : ''}`}
            onClick={() => setActiveTab('concetti')}
          >
            📚 {t('skillDetail.tabs.concepts')}
          </button>
          <button 
            className={`tab-button ${activeTab === 'esempi' ? 'active' : ''}`}
            onClick={() => setActiveTab('esempi')}
          >
            💻 {t('skillDetail.tabs.code')}
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
                      {copiedIndex === index ? `✅ ${t('skillDetail.copied')}` : `📋 ${t('skillDetail.copy')}`}
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

          {/* Messaggio se non ci sono contenuti */}
          {!language[
            activeTab === 'concetti' ? 'concettiChiave' :
            activeTab === 'esempi' ? 'esempiCodice' : null
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