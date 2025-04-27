import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: "HTML",
    descrizione: "Ottima strutturazione semantica del documento.",
    percentuale: "90%",
  },
  {
    nome: "CSS",
    descrizione: "Stile efficace.",
    percentuale: "80%",
  },
  {
    nome: "JavaScript",
    descrizione: "Competenza avanzata, con piena padronanza delle funzionalità ES6+ per codice pulito e performante.",
    percentuale: "90%",
  },
  {
    nome: "PHP",
    descrizione: "Sviluppo backend robusto.",
    percentuale: "80%",
  },
  {
    nome: "Python",
    descrizione: "Competenza avanzata, con piena padronanza delle funzionalità ES6+ per codice pulito e performante.",
    percentuale: "80%",
  },
  {
    nome: "SQL",
    descrizione: "Competenza nella gestione e interrogazione di database",
    percentuale: "80%",
  },

  {
    nome: "MySQL",
    descrizione: "Buona conoscenza delle basi per la gestione e l'interrogazione dei dati.",
    percentuale: "80%",
  },
  {
    nome: "Node.js",
    descrizione: "Competenza nello sviluppo backend.",
    percentuale: "75%",
  },
  {
    nome: "Express.js",
    descrizione: "Competenza nello sviluppo backend.",
    percentuale: "75%",
  },
  {
    nome: "React",
    descrizione: "Sviluppatore React esperto con padronanza di Redux per la gestione dello stato globale e React Router per la navigazione.",
    percentuale: "100%",
  },
  {
    nome: "Vue",
    descrizione: "Familiarità con i concetti fondamentali.",
    percentuale: "60%",
  },
  {
    nome: "Laravel",
    descrizione: "Competenza nello sviluppo backend.",
    percentuale: "80%",
  },
  
];

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {},
});

export default languagesSlice.reducer;