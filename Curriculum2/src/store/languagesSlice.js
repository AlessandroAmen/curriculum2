import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: "HTML",
    descrizione: "Ottima strutturazione semantica del documento",
    percentuale: "90%",
  },
  {
    nome: "CSS",
    descrizione: "Stile efficace.",
    percentuale: "80%",
  },
  {
    nome: "JavaScript",
    descrizione: "Competenza avanzata in JavaScript, con piena padronanza delle funzionalità ES6+ per codice pulito e performante.",
    percentuale: "90%",
  },
  {
    nome: "PHP",
    descrizione: "Sviluppo backend robusto con PHP.",
    percentuale: "80%",
  },
  {
    nome: "SQL",
    descrizione: "Competente nella gestione e interrogazione di database SQL.",
    percentuale: "80%",
  },
  {
    nome: "MySQL",
    descrizione: "Buona conoscenza delle basi di MySQL per la gestione e l'interrogazione dei dati.",
    percentuale: "80%",
  },
  {
    nome: "React",
    descrizione: "Sviluppatore React esperto con padronanza di Redux per la gestione dello stato globale e React Router per la navigazione.",
    percentuale: "100%",
  },
  {
    nome: "Vue",
    descrizione: "Familiarità con i concetti fondamentali di Vue.",
    percentuale: "60%",
  },
  {
    nome: "Node.js",
    descrizione: "Competente nello sviluppo backend con Node.",
    percentuale: "75%",
  },
  {
    nome: "laravel",
    descrizione: "Competente nello sviluppo backend con laravel",
    percentuale: "80%",
  },
  
];

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
});

export default languagesSlice.reducer;