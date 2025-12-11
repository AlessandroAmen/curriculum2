import { it } from '../../locales/it';
import { en } from '../../locales/en';

const translations = { it, en };

/**
 * Traduce la descrizione di una skill in base alla lingua corrente
 * @param {Object} skill - La skill originale
 * @param {string} lang - Lingua corrente ('it' o 'en')
 * @returns {Object} - Skill con descrizione tradotta
 */
export const translateSkill = (skill, lang = 'it') => {
  if (!skill || !skill.nome) return skill;
  
  const translatedSkill = { ...skill };
  const skillName = skill.nome;
  const translatedDescription = translations[lang]?.skillsDescriptions?.[skillName];
  
  if (translatedDescription) {
    translatedSkill.descrizione = translatedDescription;
  }
  
  return translatedSkill;
};

