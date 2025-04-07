import { Link } from "react-router";

function Navbar (){
    <ul>
        <li>
            <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/curriculum`}>Curriculum</Link>
        </li>
        <li>
        <Link to={`/skill`}>Skill</Link>
         </li>
         <li>
        <Link to={`/contattami`}>Contattami</Link>
         </li>

    </ul>
}
export default Navbar;