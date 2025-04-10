import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navskill from '../components/Navskill';

const SkillDetail = () => {
  const { nome } = useParams(); 
  const languages = useSelector(state => state.languages);

  
  const language = languages.find(lang => lang.nome.toLowerCase() === nome);

  if (!language) {
    return <h2>Linguaggio non trovato</h2>;
  }

  return (
    <div>
        <Navskill></Navskill>
      <h1>Dettagli di {language.nome}</h1>
      <p><strong>Descrizione:</strong> {language.descrizione}</p>
      <p><strong>Percentuale:</strong> {language.percentuale}</p>
    </div>
  );
};

export default SkillDetail;