import Navbar from '../components/Navbar.jsx';
import './contatti.css';

function Contatti() {
  const contactInfo = [
    {
      type: 'email',
      label: 'Email',
      value: 'xela9827@gmail.com',
      link: 'mailto:xela9827@gmail.com',
      icon: '✉️',
      description: 'Scrivimi per opportunità lavorative o collaborazioni'
    },
    {
      type: 'phone',
      label: 'Telefono',
      value: '+39 392 317 7199',
      link: 'tel:+393923177199',
      icon: '📱',
      description: 'Chiamami per una consulenza diretta'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'Alessandro Amenta',
      link: 'https://www.linkedin.com/in/alessandro-amenta/',
      icon: '💼',
      description: 'Connettiti con me su LinkedIn'
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'AlessandroAmen',
      link: 'https://github.com/AlessandroAmen',
      icon: '💻',
      description: 'Scopri i miei progetti e codice'
    }
  ];

  const handleContactClick = (contact) => {
    window.open(contact.link, contact.type === 'email' || contact.type === 'phone' ? '_self' : '_blank');
  };

  return (
    <div className="contatti-page">
      <div className="contatti-container">
        <div className="contatti-header">
          <h1>Mettiamoci in Contatto</h1>
          <p className="contatti-subtitle">
            Sono sempre aperto a nuove opportunità e collaborazioni interessanti. 
            Non esitare a contattarmi!
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
            <h2>Hai un progetto in mente?</h2>
            <p>
              Sono specializzato in sviluppo web moderno con React, Node.js e tecnologie full-stack. 
              Trasformiamo le tue idee in realtà digitale!
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:xela9827@gmail.com?subject=Opportunità di Collaborazione" 
                className="cta-button primary"
              >
                Scrivimi ora
              </a>
              <a 
                href="tel:+393923177199" 
                className="cta-button secondary"
              >
                Chiamami
              </a>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h3>Disponibilità</h3>
            <p>Disponibile per progetti freelance e opportunità full-time</p>
            <p>Tempo di risposta: entro 24 ore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatti;