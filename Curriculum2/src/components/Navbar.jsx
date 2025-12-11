import { Link } from "react-router-dom"; 
import { useTranslation } from "../hooks/useTranslation";
import LanguageToggle from "./LanguageToggle";
import "./Navbar.css";

function Navbar (){
    const { t } = useTranslation();
    
    return ( 
    <ul className="navbar">
       <li>
          <Link to="/">{t('common.home')}</Link>
        </li>        
        <li>
          <Link to="/pages/curriculum">{t('common.curriculum')}</Link>
        </li>
        <li>
          <Link to="/pages/skill">{t('common.skills')}</Link>
        </li>
        <li>
          <Link to="/pages/portfolio">{t('common.portfolio')}</Link>
        </li>
        <li>
          <Link to="/pages/contattami">{t('common.contacts')}</Link>
        </li>
        <li className="language-toggle-container">
          <LanguageToggle />
        </li>
    </ul>
    ); 
}   
export default Navbar;