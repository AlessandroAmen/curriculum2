// Funzioni helper per la gestione dei progetti

// Funzione per ottenere un progetto per slug
export const getProjectBySlug = (projectsData, slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Funzione per ottenere progetti per categoria
export const getProjectsByCategory = (projectsData, category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Funzione per ottenere il colore di una tecnologia
export const getTechColor = (tech) => {
  const colors = {
    'React': '#61DAFB',
    'React Native': '#61DAFB', 
    'Next.js': '#000000',
    'Laravel': '#FF2D20',
    'PHP': '#777BB4',
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Tailwind CSS': '#38B2AC',
    'MySQL': '#4479A1',
    'TiDB': '#FF6B35',
    'Redux': '#764ABC',
    'Chart.js': '#FF6384',
    'CSS3': '#1572B6'
  };
  return colors[tech] || '#6B7280';
};

// Funzione per validare dati progetto
export const validateProjectData = (projectData) => {
  const requiredFields = ['id', 'title', 'slug', 'description', 'technologies', 'category'];
  
  for (const field of requiredFields) {
    if (!projectData[field]) {
      throw new Error(`Campo obbligatorio mancante: ${field}`);
    }
  }
  
  return true;
};

// Funzione per ordinare progetti per data o priorità
export const sortProjects = (projectsData, sortBy = 'id') => {
  return [...projectsData].sort((a, b) => {
    if (sortBy === 'id') return a.id - b.id;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });
};

// Funzione per filtrare progetti per tecnologia
export const getProjectsByTechnology = (projectsData, technology) => {
  return projectsData.filter(project => 
    project.technologies.includes(technology)
  );
};

// Funzione per copiare testo negli appunti
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Errore nel copiare negli appunti:', err);
    return false;
  }
};

// Funzione per ottenere statistiche sui progetti
export const getProjectStats = (projectsData) => {
  const stats = {
    total: projectsData.length,
    byCategory: {},
    technologies: new Set(),
    withLiveLink: 0
  };

  projectsData.forEach(project => {
    // Conta per categoria
    stats.byCategory[project.category] = (stats.byCategory[project.category] || 0) + 1;
    
    // Raccoglie tutte le tecnologie
    project.technologies.forEach(tech => stats.technologies.add(tech));
    
    // Conta progetti con link live
    if (project.liveLink) stats.withLiveLink++;
  });

  stats.technologies = Array.from(stats.technologies);
  
  return stats;
};