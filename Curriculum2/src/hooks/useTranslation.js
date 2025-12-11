import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import { it } from '../locales/it';
import { en } from '../locales/en';

const translations = {
  it,
  en,
};

export const useTranslation = () => {
  const currentLanguage = useSelector(selectLanguage);
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback alla chiave se la traduzione non esiste
        console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
        return key;
      }
    }
    
    return value || key;
  };
  
  return { t, currentLanguage };
};

