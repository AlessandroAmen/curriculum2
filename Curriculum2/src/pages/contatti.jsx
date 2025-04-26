import Navbar from '../components/Navbar.jsx';
import './contatti.css';

function Contatti() {
  return (
    <div className="contatti-container">
      <h1>Contattami</h1>
      <p>Puoi contattarmi tramite:</p>
      <ul>
        <li>Email: <a href="mailto:xela9827@gmail.com">xela9827@gmail.com</a></li>
        <li>Telefono: <a href="tel:+393923177199">+39 392 317 7199</a></li>
      </ul>
    </div>
  );
}

export default Contatti;