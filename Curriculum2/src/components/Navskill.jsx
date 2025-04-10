import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navskill.css";

function Navskill() {
  const languages = useSelector(state => state.languages);

  return (
    <nav className="nav-skill">
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <Link to={`/pages/skill/${language.nome.toLowerCase()}`}>
              {language.nome}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navskill;
