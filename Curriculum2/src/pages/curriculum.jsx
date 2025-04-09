import Navbar from '../components/Navbar.jsx';
import './curriculum.css';

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
        </div>
        <div className='dxcurriculum'>
          <h3>Esperienze</h3>
          <p>Inserisci qui le tue esperienze.</p>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;