import Navbar from '../components/Navbar.jsx';
import './curriculum.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Curriculum() {
  const languages = useSelector(state => state.languages);
  
  return (
    <div className='paginacurriculum'>
      <div className='topcurriculum'>
        <h2>Alessandro Amenta</h2>
        <img id="fotoprofilo" src="/fotolinkedin.jpg" alt="Alessandro Amenta" />
      </div>
      <div className='bottomcurriculum'>
        <div className='sxcurriculum'>
          <div className="section-with-icon">
            <span className="section-icon">🎯</span>
            <h3>Obiettivi</h3>
          </div>
          <p>Attualmente impiegato come dipendente in una tabaccheria, coltivo una forte passione per la programmazione, che studio con dedizione da autodidatta. 
            Il mio obiettivo professionale è entrare nel settore IT, concretizzando le mie competenze in continua crescita.</p>
          
          <div className="section-with-icon">
            <span className="section-icon">📍</span>
            <h3>Dati personali</h3>
          </div>
          <p>
            <strong>Data di nascita:</strong> 27/05/1998<br />
            <strong>Località:</strong> Augusta, Siracusa<br /><br />
            <a href="https://www.linkedin.com/in/alessandro-amenta-940227354/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
            <br /><br />
            <a href="https://github.com/AlessandroAmen" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </p>
          
          <div className="section-with-icon">
            <span className="section-icon">💻</span>
            <h3>Conoscenze acquisite nello sviluppo web</h3>
          </div>
          <div className="competenze-list">
            {languages.map((lang, index) => (
              <span key={index} className="competenza-tag">
                {lang.nome}
              </span>
            ))}
          </div>
          <p>Alcuni linguaggi sono ancora da approfondire, ci sono maggiori dettagli nella pagina delle <Link to="/pages/skill">Skills</Link>.</p>
        </div>
        
        <div className='dxcurriculum'>
          <div className="section-with-icon">
            <span className="section-icon">⚡</span>
            <h3>Competenze trasversali</h3>
          </div>
          <p>✓ Risoluzione dei problemi</p>
          <p>✓ Lavoro di squadra</p>
          <p>✓ Ottima conoscenza dell'inglese</p>
          <p>✓ Apprendimento autonomo</p>
          <p>✓ Attenzione ai dettagli</p>
          
          <div className="section-with-icon">
            <span className="section-icon">🎓</span>
            <h3>Istruzione e certificazioni</h3>
          </div>
          <p><strong>Diploma di Istituto Professionale</strong><br />
             Formazione tecnica di base</p>
          <p><strong>Certificazione Rigger</strong><br />
             Competenze specializzate</p>
          
          <div className="section-with-icon">
            <span className="section-icon">💼</span>
            <h3>Esperienza professionale</h3>
          </div>
          <div className="experience-section">
            <p><strong>Esperienza attuale:</strong></p>
            <p><strong>Tabaccaio</strong><br />
               Gestione clientela e responsabilità commerciali</p>
            
            <p><strong>Esperienze precedenti:</strong></p>
            <p><strong>Consulente</strong> - Supporto e consulenza clienti</p>
            <p><strong>Magazziniere</strong> - Gestione inventario e logistica</p>
            <p><strong>Pizzaiolo</strong> - Preparazione e servizio ristorazione</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;