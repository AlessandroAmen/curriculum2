import { Link } from "react-router-dom"; 
function Navbar (){
    return ( 
    <ul>
        <li>
          <Link to="/pages/curriculum">Curriculum</Link>
        </li>
        <li>
        <Link to="/pages/skill">Skill</Link>
         </li>
         <li>
        <Link to="/pages/contattami">Contattami</Link>
         </li>
    </ul>
    ); 
}   
export default Navbar;