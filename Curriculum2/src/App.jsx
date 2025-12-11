import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from './hooks/useTranslation'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              {t('homepage.hero.title')} <span className="highlight">{t('homepage.hero.name')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('homepage.hero.subtitle')}
            </p>
            <p className="hero-description">
              {t('homepage.hero.description')}
            </p>
            <div className="hero-buttons">
              <Link to="/pages/curriculum" className="btn btn-primary">
                {t('homepage.hero.buttonCV')}
              </Link>
              <Link to="/pages/skill" className="btn btn-secondary">
                {t('homepage.hero.buttonSkills')}
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <img 
                src="/fotolinkedin.jpg" 
                alt="Alessandro Amenta" 
                className="profile-photo"
              />
              <div className="status-indicators">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  {t('homepage.hero.statusAvailable')}
                </div>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  {t('homepage.hero.statusWork')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">{t('homepage.features.title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>{t('homepage.features.curriculum.title')}</h3>
              <p>{t('homepage.features.curriculum.description')}</p>
              <Link to="/pages/curriculum" className="feature-link">{t('homepage.features.curriculum.link')}</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>{t('homepage.features.skills.title')}</h3>
              <p>{t('homepage.features.skills.description')}</p>
              <Link to="/pages/skill" className="feature-link">{t('homepage.features.skills.link')}</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>{t('homepage.features.portfolio.title')}</h3>
              <p>{t('homepage.features.portfolio.description')}</p>
              <Link to="/pages/portfolio" className="feature-link">{t('homepage.features.portfolio.link')}</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�📬</div>
              <h3>{t('homepage.features.contacts.title')}</h3>
              <p>{t('homepage.features.contacts.description')}</p>
              <Link to="/pages/contattami" className="feature-link">{t('homepage.features.contacts.link')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App