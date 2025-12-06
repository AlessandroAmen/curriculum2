import { Link, useLocation } from "react-router-dom"; 
import "./Navbar.css";

function Navbar (){
    const location = useLocation();
    const isEnglishCV = location.pathname === '/pages/curriculum-en';
    const isItalianCV = location.pathname === '/pages/curriculum';
    
    return ( 
    <ul className="navbar">
       <li>
          <Link to="/">Home</Link>
        </li>        
        <li className="curriculum-item">
          <Link to="/pages/curriculum">Curriculum</Link>
          {isItalianCV && (
            <Link to="/pages/curriculum-en" className="lang-switcher">EN</Link>
          )}
          {isEnglishCV && (
            <Link to="/pages/curriculum" className="lang-switcher">IT</Link>
          )}
        </li>
        <li>
        <Link to="/pages/skill">Skills</Link>
         </li>
         <li>
        <Link to="/pages/portfolio">Portfolio</Link>
         </li>
         <li>
        <Link to="/pages/contattami">Contatti</Link>
         </li>
    </ul>
    ); 
}   
export default Navbar;