import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, selectLanguage } from '../store/languageSlice';
import './LanguageToggle.css';

function LanguageToggle() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    // Aggiorna l'attributo lang dell'elemento html
    document.documentElement.lang = lang;
  };

  return (
    <div className="language-toggle">
      <button
        className={`lang-button ${currentLanguage === 'it' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('it')}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <button
        className={`lang-button ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;

