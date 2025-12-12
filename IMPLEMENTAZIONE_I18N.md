# Guida Completa per Implementazione Toggle Italiano/Inglese

Questo documento contiene una serie di prompt organizzati per implementare l'internazionalizzazione completa del progetto curriculum. Segui i prompt nell'ordine indicato per non tralasciare nulla.

---

## 📋 FASE 1: Setup Base e Configurazione

### Prompt 1.1: Creare il sistema di gestione lingua con Redux
```
Crea un nuovo slice Redux per gestire la lingua corrente (italiano/inglese) nel file src/store/languageSlice.js. 
Il slice deve avere:
- Stato iniziale: 'it' (italiano)
- Actions: setLanguage('it' | 'en')
- Selector per ottenere la lingua corrente
Aggiorna src/store/store.js per includere questo nuovo reducer.
```

### Prompt 1.2: Creare il file di traduzioni
```
Crea una cartella src/locales/ e crea due file:
- src/locales/it.js (traduzioni italiane)
- src/locales/en.js (traduzioni inglesi)

Ogni file deve esportare un oggetto con tutte le chiavi di traduzione organizzate per sezione:
- common (elementi comuni come "Home", "Skills", ecc.)
- navbar (tutti i link della navbar)
- homepage (tutto il contenuto di App.jsx)
- curriculum (tutto il contenuto della pagina curriculum)
- skills (tutto il contenuto della pagina skills)
- portfolio (tutto il contenuto della pagina portfolio)
- contacts (tutto il contenuto della pagina contatti)
- projects (tutti i progetti)
- skillDetails (dettagli delle skills)
```

### Prompt 1.3: Creare hook personalizzato per le traduzioni
```
Crea src/hooks/useTranslation.js che:
- Usa useSelector per ottenere la lingua corrente da Redux
- Importa i file di traduzione (it.js e en.js)
- Restituisce una funzione t(key) che accetta una chiave (es. 'homepage.title') e restituisce la traduzione corretta
- Gestisce chiavi annidate con notazione a punti (es. 'homepage.hero.title')
- Restituisce la chiave stessa se la traduzione non esiste (fallback)
```

---

## 📋 FASE 2: Componente Toggle Lingua

### Prompt 2.1: Creare componente LanguageToggle
```
Crea src/components/LanguageToggle.jsx e LanguageToggle.css con:
- Un toggle switch o pulsanti per cambiare lingua (IT/EN)
- Posizionato in alto a destra
- Design moderno e responsive
- Usa Redux per cambiare la lingua quando cliccato
- Mostra la lingua corrente evidenziata
- Aggiungi animazioni smooth per il cambio lingua
```

### Prompt 2.2: Integrare LanguageToggle nella Navbar
```
Modifica src/components/Navbar.jsx per:
- Importare e renderizzare LanguageToggle
- Rimuovere il vecchio toggle EN/IT che era solo per curriculum
- Posizionare LanguageToggle in alto a destra della navbar
- Assicurati che sia visibile su tutte le pagine
```

---

## 📋 FASE 3: Internazionalizzazione Homepage (App.jsx)

### Prompt 3.1: Tradurre App.jsx
```
Modifica src/App.jsx per:
- Importare useTranslation hook
- Sostituire tutti i testi hardcoded con chiamate a t()
- Tradurre:
  - Titolo hero: "Ciao, sono Alessandro Amenta"
  - Sottotitolo: "Sviluppatore Fullstack appassionato..."
  - Descrizione hero
  - Testi dei bottoni
  - Tutti i testi delle feature cards
  - Link "Leggi di più", "Esplora", "Scopri", "Scrivimi"
Aggiungi tutte le traduzioni mancanti nei file it.js e en.js
```

---

## 📋 FASE 4: Internazionalizzazione Navbar

### Prompt 4.1: Tradurre Navbar.jsx
```
Modifica src/components/Navbar.jsx per:
- Usare useTranslation per tutti i link
- Tradurre: "Home", "Curriculum", "Skills", "Portfolio", "Contatti"
- Rimuovere qualsiasi logica specifica per curriculum-en
- Assicurati che i link funzionino correttamente con la lingua corrente
```

---

## 📋 FASE 5: Internazionalizzazione Pagina Curriculum

### Prompt 5.1: Tradurre curriculum.jsx
```
Modifica src/pages/curriculum.jsx per:
- Importare useTranslation
- Sostituire TUTTI i testi hardcoded con t():
  - "Full stack web developer"
  - "DATA DI NASCITA"
  - "CHI SONO" e il paragrafo descrittivo
  - "SOFT SKILL" e tutti gli elementi della lista
  - "CONTATTI" e tutte le etichette
  - "ISTRUZIONE" e tutti i dettagli
  - "ESPERIENZA LAVORATIVA" e tutte le descrizioni
  - "COMPETENZE TECNICHE" e tutte le skills
  - Qualsiasi altro testo presente
Aggiungi tutte le traduzioni nei file it.js e en.js
```

### Prompt 5.2: Rimuovere curriculum-en.jsx e unificare
```
Dopo aver tradotto curriculum.jsx:
- Elimina src/pages/curriculum-en.jsx (non più necessario)
- Modifica src/routes.jsx per rimuovere la route /pages/curriculum-en
- Assicurati che curriculum.jsx funzioni per entrambe le lingue
```

---

## 📋 FASE 6: Internazionalizzazione Pagina Skills

### Prompt 6.1: Tradurre skill.jsx
```
Modifica src/pages/skill.jsx per:
- Importare useTranslation
- Tradurre tutti i testi:
  - Titoli delle sezioni
  - Etichette del grafico
  - Testi dei tooltip
  - Qualsiasi altro testo visibile
- Assicurati che i dati delle skills (da Redux) siano tradotti
  - Potrebbe essere necessario tradurre anche i nomi delle skills e le descrizioni
```

### Prompt 6.2: Tradurre languagesSlice.js
```
Modifica src/store/languagesSlice.js per:
- Creare versioni italiane e inglesi di tutti i dati delle skills
- Oppure creare un sistema che traduce i dati basandosi sulla lingua corrente
- Tradurre:
  - Nomi delle skills (es. "HTML", "CSS" possono rimanere uguali, ma "Programmazione Orientata agli Oggetti" va tradotto)
  - Descrizioni
  - Titoli dei concetti chiave
  - Spiegazioni
  - Punti delle liste
  - Titoli e descrizioni degli esempi di codice
- NOTA: I blocchi di codice possono rimanere invariati, ma commenti e stringhe dentro il codice potrebbero essere tradotti
```

---

## 📋 FASE 7: Internazionalizzazione Pagina Portfolio

### Prompt 7.1: Tradurre portfolio.jsx
```
Modifica src/pages/portfolio.jsx per:
- Importare useTranslation
- Tradurre:
  - Titoli delle sezioni (progetti freelance vs personali)
  - Testi dei bottoni ("Scopri tutto", "Frontend", "Backend")
  - Qualsiasi altro testo presente
```

### Prompt 7.2: Tradurre projectsData.js e tutti i file dei progetti
```
Per ogni file in src/data/projects/:
- barberApp.js
- budgetMeal.js
- curriculumApp.js
- sistemaGestionale.js
- ecosys.js
- assicurazioneGestionale.js

Modifica per:
- Aggiungere versioni italiane e inglesi di:
  - title
  - description
  - category
  - overview (se presente)
  - features (se presente)
  - challenges (se presente)
  - Qualsiasi altro campo testuale

Modifica src/data/projectsData.js per gestire le traduzioni basate sulla lingua corrente.
Oppure crea una funzione helper che traduce i progetti in base alla lingua selezionata.
```

---

## 📋 FASE 8: Internazionalizzazione ProjectDetail

### Prompt 8.1: Tradurre ProjectDetail.jsx
```
Leggi prima src/pages/ProjectDetail.jsx per vedere tutti i testi da tradurre, poi:
- Importare useTranslation
- Tradurre:
  - Tutti i titoli delle tab
  - Etichette ("Tecnologie", "Link", ecc.)
  - Testi dei bottoni
  - Qualsiasi altro testo presente
- Assicurati che i dati del progetto vengano tradotti correttamente
```

---

## 📋 FASE 9: Internazionalizzazione SkillDetail

### Prompt 9.1: Tradurre SkillDetail.jsx
```
Leggi prima src/pages/SkillDetail.jsx per vedere tutti i testi, poi:
- Importare useTranslation
- Tradurre tutti i testi presenti:
  - Titoli
  - Etichette
  - Testi informativi
  - Qualsiasi altro contenuto testuale
- Assicurati che i dati della skill vengano tradotti (dovrebbero già essere tradotti se hai fatto il Prompt 6.2)
```

---

## 📋 FASE 10: Internazionalizzazione Pagina Contatti

### Prompt 10.1: Tradurre contatti.jsx
```
Modifica src/pages/contatti.jsx per:
- Importare useTranslation
- Tradurre:
  - Tutti i label dei contatti ("Email", "Telefono", "LinkedIn", ecc.)
  - Tutte le description
  - Titoli delle sezioni
  - Testi dei bottoni
  - Messaggi di successo/errore (se presenti)
  - Qualsiasi altro testo presente
```

---

## 📋 FASE 11: Internazionalizzazione Componenti

### Prompt 11.1: Tradurre Navskill.jsx
```
Se esiste src/components/Navskill.jsx, leggilo e:
- Importare useTranslation
- Tradurre tutti i testi presenti
```

### Prompt 11.2: Tradurre altri componenti
```
Controlla tutti i file in src/components/ e per ogni componente che contiene testi:
- ProjectCode.jsx
- ProjectMedia.jsx
- ProjectOverview.jsx
- ProjectTabs.jsx
- Qualsiasi altro componente

Tradurre tutti i testi hardcoded usando useTranslation
```

---

## 📋 FASE 12: Persistenza e Ottimizzazioni

### Prompt 12.1: Salvare la lingua preferita in localStorage
```
Modifica src/store/languageSlice.js per:
- Leggere la lingua salvata da localStorage all'inizializzazione
- Salvare la lingua in localStorage ogni volta che cambia
- Fallback a 'it' se non c'è nessuna preferenza salvata
```

### Prompt 12.2: Aggiungere meta tag per la lingua
```
Modifica index.html o crea un componente che aggiorna:
- L'attributo lang dell'elemento <html> in base alla lingua corrente
- Meta tag per la lingua
- Title della pagina (se necessario)
```

### Prompt 12.3: Gestire URL e routing con lingua
```
Opzionale ma consigliato:
- Modifica src/routes.jsx per supportare prefissi di lingua negli URL (es. /it/portfolio, /en/portfolio)
- Oppure mantieni URL semplici e usa solo Redux per la lingua
- Aggiorna i link nella navbar per mantenere la lingua quando si naviga
```

---

## 📋 FASE 13: Testing e Verifica Finale

### Prompt 13.1: Verifica completa delle traduzioni
```
Verifica che:
- Tutti i testi siano tradotti (non ci siano testi hardcoded in italiano)
- Il toggle funzioni su tutte le pagine
- La lingua persista dopo il refresh della pagina
- Non ci siano chiavi di traduzione mancanti (console errors)
- I layout non si rompano con testi più lunghi/corti in inglese
```

### Prompt 13.2: Test responsive del toggle
```
Verifica che:
- Il toggle sia visibile e funzionante su mobile
- Il design sia responsive
- Non ci siano problemi di layout su schermi piccoli
```

---

## 📋 FASE 14: Pulizia e Documentazione

### Prompt 14.1: Rimuovere file non più necessari
```
Dopo aver completato tutto:
- Elimina src/pages/curriculum-en.jsx (se non già fatto)
- Rimuovi qualsiasi codice legacy relativo alla vecchia gestione delle lingue
- Pulisci import non utilizzati
```

### Prompt 14.2: Aggiungere commenti e documentazione
```
Aggiungi commenti nel codice dove necessario per spiegare:
- Come funziona il sistema di traduzione
- Come aggiungere nuove traduzioni
- Struttura dei file di traduzione
```

---

## 🎯 Checklist Finale

Prima di considerare il lavoro completato, verifica:

- [ ] Toggle lingua visibile e funzionante in alto a destra
- [ ] Tutti i testi della homepage tradotti
- [ ] Tutti i testi della navbar tradotti
- [ ] Pagina curriculum completamente tradotta
- [ ] Pagina skills completamente tradotta (inclusi dati Redux)
- [ ] Pagina portfolio completamente tradotta
- [ ] Tutti i progetti tradotti
- [ ] Pagina ProjectDetail completamente tradotta
- [ ] Pagina SkillDetail completamente tradotta
- [ ] Pagina contatti completamente tradotta
- [ ] Tutti i componenti tradotti
- [ ] Lingua salvata in localStorage
- [ ] Nessun testo hardcoded rimasto
- [ ] Nessun errore in console
- [ ] Design responsive funzionante
- [ ] Test su browser diversi

---

## 📝 Note Importanti

1. **Ordine di esecuzione**: Segui i prompt nell'ordine indicato per evitare problemi
2. **Test continui**: Dopo ogni fase, testa che tutto funzioni prima di procedere
3. **Chiavi di traduzione**: Usa una struttura logica per le chiavi (es. 'homepage.hero.title')
4. **Fallback**: Assicurati che se una traduzione manca, venga mostrata la chiave o un messaggio di default
5. **Performance**: Considera di caricare le traduzioni in modo lazy se diventano molto grandi
6. **Accessibilità**: Assicurati che il toggle sia accessibile da tastiera e screen reader

---

## 🚀 Come Usare Questo Documento

1. Inizia dalla FASE 1 e procedi sequenzialmente
2. Per ogni prompt, copia il testo e incollalo nella chat
3. Dopo ogni fase, verifica che tutto funzioni
4. Se trovi problemi, risolvili prima di procedere
5. Usa la checklist finale per verificare il completamento

Buon lavoro! 🎉


