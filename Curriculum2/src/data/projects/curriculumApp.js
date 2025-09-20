export const curriculumAppData = {
  id: 3,
  title: "Curriculum Interattivo",
  slug: "curriculum-interattivo",
  description: "Applicazione web React per presentare il curriculum con grafici interattivi delle competenze",
  technologies: ["React", "Redux", "Chart.js", "CSS3"],
  category: "frontend",
  image: "/fotolinkedin.jpg",
  frontendLink: "https://github.com/AlessandroAmen/curriculum2",
  backendLink: null,
  liveLink: null,
  features: [
    "Design responsive moderno",
    "Grafici interattivi delle skills",
    "Navigazione SPA con React Router",
    "State management con Redux"
  ],
  detailedDescription: `Portfolio web interattivo sviluppato per presentare in modo professionale curriculum, competenze e progetti. Utilizza tecnologie moderne come React e Redux per offrire un'esperienza utente fluida.`,
  objective: "Creare un portfolio web professionale e interattivo",
  
  screenshots: [
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Homepage con hero section",
      alt: "Homepage"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Pagina skills con grafici Chart.js",
      alt: "Skills page"
    }
  ],
  
  videos: [
    {
      url: "#",
      title: "Tour completo dell'applicazione",
      description: "Panoramica di tutte le sezioni del portfolio interattivo"
    }
  ],
  
  codeSnippets: [
    {
      title: "Redux Store Configuration",
      language: "javascript",
      code: `import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from './languagesSlice';

const store = configureStore({
  reducer: {
    languages: languagesReducer,
  },
});

export default store;`
    },
    {
      title: "Skills Chart Component",
      language: "javascript", 
      code: `import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const SkillsChart = () => {
  const languages = useSelector(state => state.languages.data);
  
  const chartData = {
    labels: languages.map(lang => lang.name),
    datasets: [{
      label: 'Livello di competenza',
      data: languages.map(lang => lang.level),
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Competenze Tecniche'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SkillsChart;`
    }
  ],
  
  challenges: [
    "Design responsive per tutti i dispositivi",
    "Performance con Chart.js",
    "Struttura scalabile del progetto",
    "Integrazione Redux per state management"
  ],
  
  learnings: [
    "React Hooks avanzati",
    "Redux Toolkit",
    "CSS Grid e Flexbox",
    "Chart.js per visualizzazioni",
    "Component composition patterns"
  ]
};