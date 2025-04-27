import { Link } from "react-router-dom"; 
import "./Navbar.css";

function Navbar (){
    return ( 
    <ul className="navbar">
       <li>
          <Link to="/">Home</Link>
        </li>        
        <li>
          <Link to="/pages/curriculum">Curriculum</Link>
        </li>
        <li>
        <Link to="/pages/skill">Skills</Link>
         </li>
         <li>
        <Link to="/pages/contattami">Contattami</Link>
         </li>
    </ul>
    ); 
}   
export default Navbar;