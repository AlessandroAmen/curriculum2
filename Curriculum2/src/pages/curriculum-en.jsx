import Navbar from '../components/Navbar.jsx';
import './curriculum.css';
import { Link } from 'react-router-dom';

function CurriculumEN() {
  return (
    <div className='paginacurriculum'>
      <div className='curriculum-container'>
        {/* Left Column - Dark Background */}
        <div className='left-column'>
          <div className="profile-section">
            <img id="fotoprofilo" src="/fotolinkedin.jpg" alt="Alessandro Amenta" />
            <h1 className="name">Alessandro Amenta</h1>
            <p className="job-title">Full stack web developer</p>
            <div className="birth-date">
              <span className="section-title-pink">DATE OF BIRTH</span>
              <span className="section-text-white">27/05/1998</span>
            </div>
          </div>

          <div className="section-left">
            <h3 className="section-title-pink">ABOUT ME</h3>
            <p className="section-text-white">I have a strong passion for development and I am self-taught: I have always learned on my own, facing new technologies with enthusiasm and determination. My goal is to enter the world of programming and I am ready to give my best, rapidly learning everything needed to grow and contribute concretely.</p>
          </div>
          
          <div className="section-left">
            <h3 className="section-title-pink">SOFT SKILLS</h3>
            <ul className="skill-list-white">
              <li>Problem solving</li>
              <li>Teamwork</li>
              <li>Autonomy</li>
              <li>Highly available</li>
            </ul>
          </div>

          <div className="section-left">
            <h3 className="section-title-pink">CONTACTS</h3>
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
                <span className="contact-text-white">Augusta, Sicily</span>
              </div>
            </div>
          </div>

          <div className="section-left">
            <h3 className="section-title-pink">LANGUAGES</h3>
            <ul className="skill-list-white">
              <li>Italian (native)</li>
              <li>English (excellent, spoken, reading, technical documentation)</li>
            </ul>
          </div>
        </div>
        
        {/* Right Column - White Background */}
        <div className='right-column'>
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">Technical Skills</h3>
            
            <div className="tech-item">
              <span className="tech-label"><strong>Frontend & UI/UX :</strong></span>
              <span className="tech-value">Javascript, Typescript, React, React Native, Next.js, Tailwind CSS, UI/UX Design</span>
            </div>

            <div className="tech-item">
              <span className="tech-label"><strong>Backend:</strong></span>
              <span className="tech-value">Database, Laravel, REST API, SQL, MYSQL, Node.js</span>
            </div>

            <div className="tech-item">
              <span className="tech-label"><strong>Tools:</strong></span>
              <span className="tech-value">GitHub, Deploy and production optimization, cursor</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">Freelance Projects</h3>
            <p className="section-description">Real projects developed for clients as a freelancer</p>
          </div>

          <div className="project-section">
            <h3 className="project-title">Ecosys</h3>
            <p className="project-subtitle">- Corporate showcase website</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/ecosys" className="project-tag-link">Frontend</Link> | <Link to="/pages/portfolio/ecosys" className="project-tag-link">Deploy</Link>
            </p>
            <ul className="project-features">
              <li>Professional showcase website for environmental and industrial remediation company</li>
              <li>Developed with Next.js and TypeScript</li>
              <li>Modern and responsive design</li>
              <li>Integrated contact form</li>
              <li>Deployed on Vercel (temporary site awaiting authcode)</li>
              <li>Project developed as freelancer</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">Insurance Management System</h3>
            <p className="project-subtitle">- WhatsApp Automation</p>
            <p className="project-tags">
              <span className="project-tag-link">Fullstack</span>
            </p>
            <ul className="project-features">
              <li>Management system for automatic WhatsApp message sending</li>
              <li>CSV file upload and processing with customer data</li>
              <li>WhatsApp API integration</li>
              <li>Send monitoring dashboard</li>
              <li>Custom message template management</li>
              <li>Private system developed as freelancer</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="section-right">
            <h3 className="section-title-black">Personal Projects</h3>
            <p className="section-description">Projects developed for learning and personal growth</p>
          </div>

          <div className="project-section">
            <h3 className="project-title">BarbierApp</h3>
            <p className="project-subtitle">- Barber appointment booking</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/barber-app" className="project-tag-link">Frontend</Link> | <Link to="/pages/portfolio/barber-app" className="project-tag-link">Backend</Link>
            </p>
            <ul className="project-features">
              <li>Mobile app and backend for booking appointments at local barbers</li>
              <li>Mobile development with React Native</li>
              <li>Backend API in Laravel, TiDB database</li>
              <li>User login/registration, admin/barber role management</li>
              <li>Integrated calendar and time slot selection</li>
              <li>Barber shop and staff master data management</li>
              <li>Focus on user experience and real functionalities</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">BudgetMeal</h3>
            <p className="project-subtitle">- Expense and meal management</p>
            <p className="project-tags">
              <Link to="/pages/portfolio/budget-meal" className="project-tag-link">Frontend</Link> | <Link to="/pages/portfolio/budget-meal" className="project-tag-link">Deploy</Link>
            </p>
            <ul className="project-features">
              <li>Web application for meal planning and food budget control</li>
              <li>Centralized state management with React Context</li>
              <li>Dynamic calculation of recipe and meal costs</li>
              <li>Import/export data in JSON for backup and migration</li>
              <li>Responsive UI, light animations</li>
              <li>Weekly meal planning with automatic summary</li>
              <li>Extendable architecture for new functionalities</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="project-section">
            <h3 className="project-title">Other projects</h3>
            <ul className="project-features">
              <li>I have developed several minor projects using modern technologies</li>
              <li>I continue to experiment and learn with small web and mobile apps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumEN;

