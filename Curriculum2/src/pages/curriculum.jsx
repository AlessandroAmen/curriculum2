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
          <h3>Obiettivi</h3>
          <p>Attualmente impiegato come dipendente in una tabaccheria, coltivo una forte passione per la programmazione, che studio con dedizione da autodidatta. 
            Il mio obiettivo professionale è entrare nel settore IT, concretizzando le mie competenze in continua crescita.</p>
          <h3>Dati personali</h3>
          <p>
            Augusta, Siracusa<br /><br />
            <a href="https://www.linkedin.com/in/alessandro-amenta-940227354/">Linkedin</a>
            <br /><br />
            <a href="https://github.com/AlessandroAmen">Github</a>
          </p>
          <h3>Conoscenze acquisite nello sviluppo web</h3>
          <p>{languages.map(lang => lang.nome).join(', ')}.</p>
          <p>Alcuni linguaggi sono ancora da approfondire, ci sono maggiori dettagli nella pagina delle <Link to="/pages/skill">Skills</Link>.</p>
        </div>
        <div className='dxcurriculum'>
          <h3>Competenze</h3>
          <p>Risoluzione dei problemi</p>
          <p>Lavoro di squadra</p>
          <p>Ottima conoscenza dell'inglese</p>
          <h3>Istruzione e certificazioni</h3>
          <p>Diploma di Istituto Professionale</p>
          <p>Certificazione Rigger</p>
          <h3>Esperienza professionale attuale</h3>
          <p>Tabaccaio</p>
          <h3>Altre esperienze professionali</h3>
          <p>Consulente</p>
          <p>Magazziniere</p>
          <p>Pizzaiolo</p> 
        </div>
      </div>
    </div>
  );
}

export default Curriculum;