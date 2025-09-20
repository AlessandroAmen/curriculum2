import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navskill.css";

function Navskill() {
  const languages = useSelector(state => state.languages);

  return (
    <div className="navskill">
      <ul>
        {languages.map((language, index) => (
          <li 
            key={index}
            style={{ '--delay': index }}
          >
            <Link to={`/pages/skill/${language.nome.toLowerCase()}`}>
              {language.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navskill;
