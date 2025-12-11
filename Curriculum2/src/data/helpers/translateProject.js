import { it } from '../../locales/it';
import { en } from '../../locales/en';

const translations = { it, en };

/**
 * Traduce un progetto in base alla lingua corrente
 * @param {Object} project - Il progetto originale
 * @param {string} lang - Lingua corrente ('it' o 'en')
 * @returns {Object} - Progetto tradotto
 */
export const translateProject = (project, lang = 'it') => {
  if (!project || !project.slug) return project;
  
  // Mappa gli slug ai nomi delle chiavi nelle traduzioni
  const slugToKey = {
    'ecosys': 'ecosys',
    'barber-app': 'barberApp',
    'budget-meal': 'budgetMeal',
    'curriculum-interattivo': 'curriculumApp',
    'sistema-gestionale': 'sistemaGestionale',
    'assicurazione-gestionale': 'assicurazioneGestionale',
  };
  
  const projectKey = slugToKey[project.slug] || project.slug.replace(/-/g, '');
  const translationsForLang = translations[lang]?.projects?.[projectKey];
  
  if (!translationsForLang) {
    console.warn(`No translations found for project: ${project.slug} in language: ${lang}`);
    return project;
  }

  // Crea una copia del progetto e sostituisci i campi traducibili
  const translatedProject = { ...project };
  
  // Traduci i campi principali
  if (translationsForLang.title) translatedProject.title = translationsForLang.title;
  if (translationsForLang.description) translatedProject.description = translationsForLang.description;
  if (translationsForLang.detailedDescription) translatedProject.detailedDescription = translationsForLang.detailedDescription;
  if (translationsForLang.objective) translatedProject.objective = translationsForLang.objective;
  if (translationsForLang.note) translatedProject.note = translationsForLang.note;
  if (translationsForLang.features) translatedProject.features = translationsForLang.features;
  if (translationsForLang.challenges) translatedProject.challenges = translationsForLang.challenges;
  if (translationsForLang.learnings) translatedProject.learnings = translationsForLang.learnings;
  
  // Traduci screenshots
  if (translationsForLang.screenshots && project.screenshots) {
    translatedProject.screenshots = project.screenshots.map((screenshot, index) => ({
      ...screenshot,
      caption: translationsForLang.screenshots[index]?.caption || screenshot.caption,
      alt: translationsForLang.screenshots[index]?.alt || screenshot.alt,
    }));
  }
  
  // Traduci videos
  if (translationsForLang.videos && project.videos) {
    translatedProject.videos = project.videos.map((video, index) => ({
      ...video,
      title: translationsForLang.videos[index]?.title || video.title,
      description: translationsForLang.videos[index]?.description || video.description,
    }));
  }
  
  // I codeSnippets non vengono tradotti (solo i titoli se presenti)
  if (translationsForLang.codeSnippets && project.codeSnippets) {
    translatedProject.codeSnippets = project.codeSnippets.map((snippet, index) => ({
      ...snippet,
      title: translationsForLang.codeSnippets[index]?.title || snippet.title,
      // Il codice rimane invariato
    }));
  }
  
  return translatedProject;
};

