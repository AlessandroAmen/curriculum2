import Navbar from '../components/Navbar.jsx';
import { useTranslation } from '../hooks/useTranslation';
import './contatti.css';

function Contatti() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      type: 'email',
      label: t('contacts.email.label'),
      value: 'xela9827@gmail.com',
      link: 'mailto:xela9827@gmail.com',
      icon: '✉️',
      description: t('contacts.email.description')
    },
    {
      type: 'phone',
      label: t('contacts.phone.label'),
      value: '+39 392 317 7199',
      link: 'tel:+393923177199',
      icon: '📱',
      description: t('contacts.phone.description')
    },
    {
      type: 'linkedin',
      label: t('contacts.linkedin.label'),
      value: 'Alessandro Amenta',
      link: 'https://www.linkedin.com/in/alessandro-amenta/',
      icon: '💼',
      description: t('contacts.linkedin.description')
    },
    {
      type: 'github',
      label: t('contacts.github.label'),
      value: 'AlessandroAmen',
      link: 'https://github.com/AlessandroAmen',
      icon: '💻',
      description: t('contacts.github.description')
    }
  ];

  const handleContactClick = (contact) => {
    window.open(contact.link, contact.type === 'email' || contact.type === 'phone' ? '_self' : '_blank');
  };

  return (
    <div className="contatti-page">
      <div className="contatti-container">
        <div className="contatti-header">
          <h1>{t('contacts.title')}</h1>
          <p className="contatti-subtitle">
            {t('contacts.subtitle')}
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div 
              key={index} 
              className={`contact-card ${contact.type}`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="contact-icon">
                <span>{contact.icon}</span>
              </div>
              <div className="contact-content">
                <h3 className="contact-label">{contact.label}</h3>
                <p className="contact-value">{contact.value}</p>
                <p className="contact-description">{contact.description}</p>
              </div>
              <div className="contact-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h2>{t('contacts.cta.title')}</h2>
            <p>
              {t('contacts.cta.description')}
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:xela9827@gmail.com?subject=Opportunità di Collaborazione" 
                className="cta-button primary"
              >
                {t('contacts.cta.writeNow')}
              </a>
              <a 
                href="tel:+393923177199" 
                className="cta-button secondary"
              >
                {t('contacts.cta.call')}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h3>{t('contacts.availability.title')}</h3>
            <p>{t('contacts.availability.description')}</p>
            <p>{t('contacts.availability.responseTime')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatti;