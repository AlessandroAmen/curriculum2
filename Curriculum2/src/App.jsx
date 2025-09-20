import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Ciao, sono <span className="highlight">Alessandro Amenta</span>
            </h1>
            <p className="hero-subtitle">
              Sviluppatore Fullstack appassionato di tecnologie moderne
            </p>
            <p className="hero-description">
              Trasformo le mie passioni in codice, creando esperienze web innovative 
              e user-friendly. Attualmente in crescita nel mondo dello sviluppo web.
            </p>
            <div className="hero-buttons">
              <Link to="/pages/curriculum" className="btn btn-primary">
                Scopri il mio CV
              </Link>
              <Link to="/pages/skill" className="btn btn-secondary">
                Le mie Skills
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
              <div className="status-indicator">
                <span className="status-dot"></span>
                Disponibile per progetti
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Cosa troverai qui</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Curriculum Dettagliato</h3>
              <p>La mia esperienza, competenze e obiettivi professionali</p>
              <Link to="/pages/curriculum" className="feature-link">Leggi di più</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Skills Tecniche</h3>
              <p>Le tecnologie che padroneggio con grafici interattivi</p>
              <Link to="/pages/skill" className="feature-link">Esplora</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>Portfolio</h3>
              <p>I progetti che ho sviluppato utilizzando tecnologie moderne</p>
              <Link to="/pages/portfolio" className="feature-link">Scopri</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�📬</div>
              <h3>Contattami</h3>
              <p>Mettiamoci in contatto per future collaborazioni</p>
              <Link to="/pages/contattami" className="feature-link">Scrivimi</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App