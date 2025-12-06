import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Navskill from '../components/Navskill';
import './skill.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Skill = () => {
  const languages = useSelector(state => state.languages);
  const navigate = useNavigate();
  const [animatedPercentages, setAnimatedPercentages] = useState({});

  useEffect(() => {
    // Animazione delle barre di progresso
    const timer = setTimeout(() => {
      const animated = {};
      languages.forEach(lang => {
        animated[lang.nome] = parseInt(lang.percentuale);
      });
      setAnimatedPercentages(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, [languages]);

  const labels = languages.map(lang => lang.nome);
  const percentages = languages.map(lang => parseInt(lang.percentuale));

  const data = {
    labels,
    datasets: [
      {
        label: 'Competenza (%)',
        data: percentages,
        backgroundColor: languages.map((_, index) => {
          const colors = [
            'rgba(52, 152, 219, 0.8)',
            'rgba(46, 204, 113, 0.8)', 
            'rgba(243, 156, 18, 0.8)',
            'rgba(155, 89, 182, 0.8)',
            'rgba(231, 76, 60, 0.8)',
            'rgba(26, 188, 156, 0.8)',
            'rgba(241, 196, 15, 0.8)',
            'rgba(230, 126, 34, 0.8)',
            'rgba(142, 68, 173, 0.8)',
            'rgba(52, 73, 94, 0.8)'
          ];
          return colors[index % colors.length];
        }),
        borderColor: languages.map((_, index) => {
          const colors = [
            'rgba(52, 152, 219, 1)',
            'rgba(46, 204, 113, 1)', 
            'rgba(243, 156, 18, 1)',
            'rgba(155, 89, 182, 1)',
            'rgba(231, 76, 60, 1)',
            'rgba(26, 188, 156, 1)',
            'rgba(241, 196, 15, 1)',
            'rgba(230, 126, 34, 1)',
            'rgba(142, 68, 173, 1)',
            'rgba(52, 73, 94, 1)'
          ];
          return colors[index % colors.length];
        }),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Inter, sans-serif',
            weight: '600'
          },
          color: '#2c3e50',
          padding: 20
        }
      },
      title: {
        display: true,
        text: 'Le Mie Competenze Tecniche',
        font: {
          size: 18,
          family: 'Inter, sans-serif',
          weight: '700'
        },
        color: '#2c3e50',
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(44, 62, 80, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#3498db',
        borderWidth: 1,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: '600'
        },
        bodyFont: {
          size: 13
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        ticks: {
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          color: '#6c757d',
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Inter, sans-serif',
            size: 12,
            weight: '500'
          },
          color: '#6c757d',
          maxRotation: 45
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  const getTechIcon = (techName) => {
    const icons = {
      'HTML': '🌐',
      'CSS': '🎨', 
      'JavaScript': '⚡',
      'PHP': '🐘',
      'Python': '🐍',
      'SQL': '💾',
      'MySQL': '🗄️',
      'Node.js': '🟢',
      'Express.js': '🚀',
      'React': '⚛️',
      'Vue': '💚',
      'Laravel': '🔥'
    };
    return icons[techName] || '💻';
  };

  const getSkillLevel = (percentage) => {
    if (percentage >= 90) return 'Esperto';
    if (percentage >= 80) return 'Avanzato';
    if (percentage >= 70) return 'Intermedio';
    if (percentage >= 60) return 'Base';
    return 'Principiante';
  };

  return (
    <div className="skills-page">
      <Navskill />
      
      <div className="skills-content">
        <div className="skills-header">
          <h1 className="skills-title">Le Mie Competenze</h1>
          <p className="skills-subtitle">
            Una panoramica delle tecnologie che padroneggio e del mio livello di competenza in ciascuna
          </p>
        </div>

        <div className="chart-container">
          <div className="chart-wrapper">
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="skills-grid">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="skill-card"
              onClick={() => navigate(`/pages/skill/${lang.nome.toLowerCase()}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="skill-name">
                <span className="tech-icon">{getTechIcon(lang.nome)}</span>
                {lang.nome}
              </div>
              <div className="skill-percentage">
                {lang.percentuale}
              </div>
              <div className="skill-description">
                {lang.descrizione}
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar"
                  style={{ 
                    width: `${animatedPercentages[lang.nome] || 0}%`
                  }}
                ></div>
              </div>
              <div className="skill-level">
                Livello: {getSkillLevel(parseInt(lang.percentuale))}
              </div>
              <div className="skill-learn-more">
                📚 Clicca per studiare →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;