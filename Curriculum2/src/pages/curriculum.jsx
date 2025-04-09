import Navbar from '../components/Navbar.jsx';
import './curriculum.css';
import { Link } from 'react-router-dom';

function Curriculum() {
  return (
    <div className='paginacurriculum'>
      <div className='topcurriculum'>
        <h2>Alessandro Amenta</h2>
        <img src="path/to/your/photo.jpg" alt="Alessandro Amenta" />
      </div>
      <div className='bottomcurriculum'>
        <div className='sxcurriculum'>
          <h3>Obbiettivi personali</h3>
          <p>Attualmente impiegato come dipendente in una tabaccheria, coltivo una forte passione per la programmazione, che studio con dedizione da autodidatta. Il mio obiettivo professionale è entrare nel settore IT, mettendo a frutto le mie competenze in crescita e contribuendo attivamente con entusiasmo e desiderio di apprendimento continuo.</p>
          <h3>Dati personali</h3>
          <p>
            Augusta, Siracusa<br /><br />
            +393923177199<br /><br />
            https://www.linkedin.com/in/alessandro-amenta-940227354/<br /><br />
            https://github.com/AlessandroAmen
          </p>
          <h3>Skill personali per sviluppo WEB</h3>
          <p>HTML, CSS, Javascript, PHP, Python, SQL, MySQL, Node, Express, React, VUE</p>
          <p>alcuni linguaggi sono ancora da approfondire, troverai altro nella pagina della <Link to="/pages/skill">Skill</Link></p>
        </div>
        <div className='dxcurriculum'>

          <h3>SKill personali</h3>
          <p>Risoluzione dei problemi</p>
          <p>Lavoro di squadra</p>
          <p>Ottima conoscenza dell'inglese</p>
          <p>Diploma alberhiero</p>
         <p>Rigger certificato</p>
         <h3>Lavori svolti</h3>
         <p>Magazzieniere per squadra sportiva</p>
         <p>Pizzaiolo</p>
         <p>Consulente</p>
         <p></p>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;