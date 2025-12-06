// File principale che centralizza tutti i progetti

// Import di tutti i progetti
import { barberAppData } from './projects/barberApp.js';
import { budgetMealData } from './projects/budgetMeal.js';
import { curriculumAppData } from './projects/curriculumApp.js';
import { sistemaGestionaleData } from './projects/sistemaGestionale.js';
import { ecosysData } from './projects/ecosys.js';
import { assicurazioneGestionaleData } from './projects/assicurazioneGestionale.js';

// Import delle funzioni helper
import { 
  getProjectBySlug as getProjectBySlugHelper,
  getProjectsByCategory as getProjectsByCategoryHelper,
  getTechColor,
  validateProjectData,
  sortProjects,
  getProjectsByTechnology,
  copyToClipboard,
  getProjectStats
} from './helpers/projectHelpers.js';

// Array principale con tutti i progetti
// Ordine: prima progetti freelance (reali), poi progetti personali (hobby)
export const projectsData = [
  ecosysData,
  assicurazioneGestionaleData,
  barberAppData,
  budgetMealData,
  curriculumAppData,
  sistemaGestionaleData
];

// Validazione di tutti i progetti all'importazione
projectsData.forEach(project => {
  validateProjectData(project);
});

// Funzioni helper esportate (wrapper per mantenere l'API originale)
export const getProjectBySlug = (slug) => {
  return getProjectBySlugHelper(projectsData, slug);
};

export const getProjectsByCategory = (category) => {
  return getProjectsByCategoryHelper(projectsData, category);
};

// Export di tutte le funzioni helper aggiuntive
export {
  getTechColor,
  validateProjectData,
  sortProjects,
  getProjectsByTechnology,
  copyToClipboard,
  getProjectStats
};

// Export di singoli progetti per uso diretto se necessario
export {
  barberAppData,
  budgetMealData,
  curriculumAppData,
  sistemaGestionaleData,
  ecosysData,
  assicurazioneGestionaleData
};