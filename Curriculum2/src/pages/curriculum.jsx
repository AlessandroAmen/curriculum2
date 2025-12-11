import Navbar from '../components/Navbar.jsx';
import './curriculum.css';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

function Curriculum() {
  const { t } = useTranslation();
  return (
    <div className='paginacurriculum'>
      <div className='curriculum-container'>
        {/* Colonna Sinistra - Sfondo Scuro */}
        <div className='left-column'>
          <div className="profile-section">
        <img id="fotoprofilo" src="/fotolinkedin.jpg" alt="Alessandro Amenta" />
            <h1 className="name">Alessandro Amenta</h1>
            <p className="job-title">{t('curriculum.jobTitle')}</p>
            <div className="birth-date">
              <span className="section-title-pink">{t('curriculum.birthDate')}</span>
              <span className="section-text-white">{t('curriculum.birthDateValue')}</span>
            </div>
      </div>

          <div className="section-left">
            <h3 className="section-title-pink">{t('curriculum.about.title')}</h3>
            <p className="section-text-white">{t('curriculum.about.text')}</p>
          </div>
          
          <div className="section-left">
            <h3 className="section-title-pink">{t('curriculum.softSkills.title')}</h3>
            <ul className="skill-list-white">
              {t('curriculum.softSkills.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-left">
            <h3 className="section-title-pink">{t('curriculum.contacts.title')}</h3>
            <div className="contacts-list">
              <div className="contact-item">
                <a href="https://github.com/AlessandroAmen" target="_blank" rel="noopener noreferrer" className="contact-link-white">github</a>
              </div>
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/alessandro-amenta-940227354/" target="_blank" rel="noopener noreferrer" className="contact-link-white">linkedin</a>
              </div>
              <div className="contact-item">
                <a href="tel:+393923177199" className="contact-link-white">+393923177199</a>
              </div>
              <div className="contact-item">
                <span className="contact-text-white">{t('curriculum.contacts.location')}</span>
              </div>
            </div>
          </div>

          <div className="section-left">
            <h3 className="section-title-pink">{t('curriculum.languages.title')}</h3>
            <ul className="skill-list-white">
              {t('curriculum.languages.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Colonna Destra - Sfondo Bianco */}
        <div className='right-column'>
          <h2 className="portfolio-title">{t('curriculum.portfolio.title')}</h2>
          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">{t('curriculum.technicalSkills.title')}</h3>
            
            <div className="tech-item">
              <span className="tech-label"><strong>{t('curriculum.technicalSkills.frontend')}</strong></span>
              <span className="tech-value">{t('curriculum.technicalSkills.frontendValue')}</span>
            </div>

            <div className="tech-item">
              <span className="tech-label"><strong>{t('curriculum.technicalSkills.backend')}</strong></span>
              <span className="tech-value">{t('curriculum.technicalSkills.backendValue')}</span>
            </div>

            <div className="tech-item">
              <span className="tech-label"><strong>{t('curriculum.technicalSkills.tools')}</strong></span>
              <span className="tech-value">{t('curriculum.technicalSkills.toolsValue')}</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">{t('curriculum.portfolio.freelance.title')}</h3>
            <p className="section-description">{t('curriculum.portfolio.freelance.description')}</p>
          </div>

          <div className="project-section">
            <h3 className="project-title">{t('curriculum.portfolio.ecosys.title')}</h3>
            <p className="project-subtitle">{t('curriculum.portfolio.ecosys.subtitle')}</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/ecosys" className="project-tag-link">{t('portfolio.frontend')}</Link> | <Link to="/pages/portfolio/ecosys" className="project-tag-link">{t('portfolio.liveDemo')}</Link>
            </p>
            <ul className="project-features">
              {t('curriculum.portfolio.ecosys.features').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">{t('curriculum.portfolio.insurance.title')}</h3>
            <p className="project-subtitle">{t('curriculum.portfolio.insurance.subtitle')}</p>
            <p className="project-tags">
              <span className="project-tag-link">{t('portfolio.backend')}</span>
            </p>
            <ul className="project-features">
              {t('curriculum.portfolio.insurance.features').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">{t('curriculum.portfolio.personal.title')}</h3>
            <p className="section-description">{t('curriculum.portfolio.personal.description')}</p>
          </div>

          <div className="project-section">
            <h3 className="project-title">{t('curriculum.portfolio.barberApp.title')}</h3>
            <p className="project-subtitle">{t('curriculum.portfolio.barberApp.subtitle')}</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/barber-app" className="project-tag-link">{t('portfolio.frontend')}</Link> | <Link to="/pages/portfolio/barber-app" className="project-tag-link">{t('portfolio.backend')}</Link>
            </p>
            <ul className="project-features">
              {t('curriculum.portfolio.barberApp.features').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">{t('curriculum.portfolio.budgetMeal.title')}</h3>
            <p className="project-subtitle">{t('curriculum.portfolio.budgetMeal.subtitle')}</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/budget-meal" className="project-tag-link">{t('portfolio.frontend')}</Link> | <Link to="/pages/portfolio/budget-meal" className="project-tag-link">{t('portfolio.liveDemo')}</Link>
            </p>
            <ul className="project-features">
              {t('curriculum.portfolio.budgetMeal.features').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">{t('curriculum.portfolio.otherProjects.title')}</h3>
            <ul className="project-features">
              {t('curriculum.portfolio.otherProjects.features').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;