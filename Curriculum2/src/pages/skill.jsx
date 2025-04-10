import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Skill = () => {
  // Prendi lo stato globale dal Redux store
  const languages = useSelector(state => state.languages);

  return (
    <div>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <Link to={`/pages/skill/${language.nome.toLowerCase()}`}>
              {language.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;