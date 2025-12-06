import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: "HTML",
    descrizione: "Ottima strutturazione semantica del documento.",
    percentuale: "90%",
    concettiChiave: [
      {
        titolo: "Struttura Base di un Documento HTML",
        spiegazione: "Ogni pagina HTML ha una struttura fondamentale che definisce come il browser interpreta il contenuto.",
        punti: [
          "<!DOCTYPE html> - Dichiara che il documento è HTML5",
          "<html> - Elemento radice che contiene tutto il contenuto",
          "<head> - Contiene metadati (title, meta, link CSS, ecc.)",
          "<body> - Contiene il contenuto visibile della pagina"
        ]
      },
      {
        titolo: "Tag Semantici",
        spiegazione: "I tag semantici descrivono il significato del contenuto, non solo l'aspetto. Migliorano SEO e accessibilità.",
        punti: [
          "<header> - Intestazione della pagina o di una sezione",
          "<nav> - Menu di navigazione",
          "<main> - Contenuto principale della pagina",
          "<article> - Contenuto autonomo e riutilizzabile",
          "<section> - Sezione tematica del documento",
          "<aside> - Contenuto correlato ma separato",
          "<footer> - Piè di pagina"
        ]
      },
      {
        titolo: "Form e Input",
        spiegazione: "I form permettono agli utenti di inviare dati. Ogni input ha un type specifico per validazione.",
        punti: [
          "<form> con attributi action (dove inviare) e method (GET/POST)",
          "<input> con type: text, email, password, number, date, checkbox, radio",
          "<textarea> per testo multi-linea",
          "<select> e <option> per menu a tendina",
          "<button> per azioni",
          "Attributi: required, placeholder, value, name"
        ]
      },
      {
        titolo: "Attributi Globali Importanti",
        spiegazione: "Attributi utilizzabili su qualsiasi elemento HTML.",
        punti: [
          "id - Identificatore unico per l'elemento",
          "class - Una o più classi CSS",
          "style - Stili CSS inline",
          "data-* - Attributi personalizzati per dati",
          "title - Tooltip al passaggio del mouse",
          "aria-* - Attributi per accessibilità"
        ]
      },
      {
        titolo: "Liste e Tabelle",
        spiegazione: "Strutture per organizzare dati in modo ordinato.",
        punti: [
          "<ul> - Lista non ordinata (pallini)",
          "<ol> - Lista ordinata (numeri)",
          "<li> - Elemento di lista",
          "<table> - Tabella",
          "<thead>, <tbody>, <tfoot> - Sezioni della tabella",
          "<tr> - Riga, <th> - Intestazione, <td> - Cella"
        ]
      }
    ],
    esempiCodice: [
      {
        titolo: "Struttura Base HTML5",
        descrizione: "Template minimo per iniziare qualsiasi progetto web",
        codice: `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Mia Pagina</title>
</head>
<body>
    <h1>Benvenuto!</h1>
    <p>Questo è un paragrafo.</p>
</body>
</html>`
      },
      {
        titolo: "Pagina Semantica Completa",
        descrizione: "Esempio di struttura moderna con tag semantici",
        codice: `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Blog Post</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Chi Sono</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h1>Titolo dell'Articolo</h1>
            <p>Contenuto principale...</p>
        </article>

        <aside>
            <h2>Articoli Correlati</h2>
            <ul>
                <li><a href="#">Articolo 1</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 Il Mio Sito</p>
    </footer>
</body>
</html>`
      },
      {
        titolo: "Form di Registrazione",
        descrizione: "Form completo con vari tipi di input e validazione",
        codice: `<form action="/register" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" 
           minlength="8" required>

    <label for="birthday">Data di Nascita:</label>
    <input type="date" id="birthday" name="birthday">

    <label>
        <input type="checkbox" name="terms" required>
        Accetto i termini e condizioni
    </label>

    <button type="submit">Registrati</button>
</form>`
      },
      {
        titolo: "Tabella Dati",
        descrizione: "Tabella strutturata con intestazioni e dati",
        codice: `<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ruolo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mario Rossi</td>
            <td>mario@email.com</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Laura Bianchi</td>
            <td>laura@email.com</td>
            <td>User</td>
        </tr>
    </tbody>
</table>`
      },
      {
        titolo: "Media Embedding",
        descrizione: "Come inserire immagini, video e audio",
        codice: `<!-- Immagine -->
<img src="foto.jpg" alt="Descrizione dell'immagine" 
     width="300" height="200">

<!-- Video -->
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    Il tuo browser non supporta il tag video.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Il tuo browser non supporta l'audio.
</audio>

<!-- Iframe (es. YouTube) -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0" allowfullscreen>
</iframe>`
      }
    ],
    esercizi: [
      {
        titolo: "Crea una Landing Page",
        descrizione: "Costruisci una landing page per un prodotto con header, sezione hero, features e footer",
        requisiti: [
          "Header con logo e menu di navigazione",
          "Sezione hero con titolo accattivante e CTA button",
          "Sezione features con almeno 3 caratteristiche del prodotto",
          "Footer con copyright e link social",
          "Usa tag semantici appropriati"
        ],
        suggerimento: "Inizia con la struttura base HTML5, poi aggiungi header, main (con sections per hero e features) e footer"
      },
      {
        titolo: "Form di Contatto Completo",
        descrizione: "Crea un form di contatto con validazione HTML5",
        requisiti: [
          "Campo nome (required)",
          "Campo email (type email, required)",
          "Campo telefono (type tel, pattern per validazione)",
          "Select per scegliere il motivo del contatto",
          "Textarea per il messaggio (minlength 10)",
          "Checkbox per privacy policy (required)",
          "Button di invio"
        ],
        suggerimento: "Usa l'attributo 'pattern' per validare il formato del telefono, es: pattern='[0-9]{10}'"
      },
      {
        titolo: "Tabella Orario Settimanale",
        descrizione: "Crea una tabella per visualizzare un orario scolastico o lavorativo",
        requisiti: [
          "7 colonne (una per giorno della settimana)",
          "Almeno 5 righe (fasce orarie)",
          "Usa <thead> per le intestazioni dei giorni",
          "Usa <tbody> per le fasce orarie",
          "Alcuni eventi possono occupare più celle (usa colspan o rowspan)"
        ],
        suggerimento: "L'attributo colspan='2' fa occupare a una cella 2 colonne, rowspan='2' fa occupare 2 righe"
      },
      {
        titolo: "Galleria Immagini",
        descrizione: "Crea una galleria di immagini con didascalie",
        requisiti: [
          "Usa <figure> e <figcaption> per ogni immagine",
          "Almeno 6 immagini",
          "Ogni immagine deve avere un alt text descrittivo",
          "Le immagini devono essere linkabili (wrapped in <a>)"
        ],
        suggerimento: "La struttura è: <figure><a><img></a><figcaption>Descrizione</figcaption></figure>"
      }
    ],
    codingTestTips: [
      {
        titolo: "Ricorda Sempre il DOCTYPE",
        contenuto: "Nei coding test, anche se sembra banale, inizia SEMPRE con <!DOCTYPE html>. Molti test automatici verificano questo. È il primo segnale che conosci HTML5.",
        esempio: "<!DOCTYPE html>\n<html lang='it'>\n<!-- resto del codice -->"
      },
      {
        titolo: "Tag Semantici = Punti Extra",
        contenuto: "Usa <header>, <nav>, <main>, <article>, <section>, <aside>, <footer> invece di <div> generici. I recruiter lo notano e dimostra che conosci le best practices moderne.",
        esempio: "<!-- ❌ Male -->\n<div class='header'>\n\n<!-- ✅ Bene -->\n<header>"
      },
      {
        titolo: "Form: name è Fondamentale",
        contenuto: "Ogni input deve avere un attributo 'name'. È quello che viene inviato al server. Molti dimenticano questo dettaglio nei test.",
        esempio: "<input type='text' name='username' id='username' required>"
      },
      {
        titolo: "Label e Input: Collega Sempre",
        contenuto: "Usa il 'for' nel label collegato all'id dell'input. È fondamentale per accessibilità e nei test viene spesso verificato.",
        esempio: "<label for='email'>Email:</label>\n<input type='email' id='email' name='email'>"
      },
      {
        titolo: "Button type='submit' vs type='button'",
        contenuto: "In un form, se vuoi inviare i dati usa type='submit' (o non specificare nulla). Usa type='button' solo se il button non deve inviare il form.",
        esempio: "<!-- Invia il form -->\n<button type='submit'>Invia</button>\n\n<!-- Non invia -->\n<button type='button' onclick='doSomething()'>Azione</button>"
      },
      {
        titolo: "Alt Text per Immagini",
        contenuto: "L'attributo alt è OBBLIGATORIO per <img>. Descrive l'immagine per screen reader e SEO. Nei test viene quasi sempre verificato.",
        esempio: "<img src='logo.png' alt='Logo aziendale di TechCorp'>"
      },
      {
        titolo: "Meta Viewport per Responsive",
        contenuto: "Includi sempre questo meta tag nel <head>. È essenziale per il responsive design e molti test lo richiedono esplicitamente.",
        esempio: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
      }
    ]
  },
  {
    nome: "CSS",
    descrizione: "Stile efficace.",
    percentuale: "80%",
    concettiChiave: [
      {
        titolo: "Selettori CSS",
        spiegazione: "I selettori definiscono quali elementi HTML vengono stilizzati. Conoscerli bene è fondamentale.",
        punti: [
          "Selettore di tipo: p { } - seleziona tutti i <p>",
          "Selettore di classe: .nome-classe { } - seleziona elementi con quella classe",
          "Selettore ID: #id { } - seleziona elemento con quell'ID (unico)",
          "Selettore universale: * { } - seleziona tutti gli elementi",
          "Selettori combinati: div p { } (discendente), div > p { } (figlio diretto)",
          "Pseudo-classi: :hover, :focus, :first-child, :nth-child(n)",
          "Pseudo-elementi: ::before, ::after, ::first-letter"
        ]
      },
      {
        titolo: "Box Model",
        spiegazione: "Ogni elemento HTML è una scatola. Il box model definisce dimensioni e spaziature.",
        punti: [
          "Content - il contenuto effettivo (testo, immagini)",
          "Padding - spazio interno tra contenuto e bordo",
          "Border - bordo della scatola",
          "Margin - spazio esterno tra elementi",
          "box-sizing: border-box - include padding e border nella larghezza totale",
          "Calcolo larghezza totale = width + padding + border + margin"
        ]
      },
      {
        titolo: "Layout: Flexbox",
        spiegazione: "Sistema di layout unidimensionale (riga o colonna) per distribuire spazio e allineare elementi.",
        punti: [
          "display: flex - attiva flexbox sul contenitore",
          "flex-direction: row | column - direzione principale",
          "justify-content: center | space-between | flex-start - allineamento asse principale",
          "align-items: center | stretch | flex-start - allineamento asse secondario",
          "flex-wrap: wrap - permette agli elementi di andare a capo",
          "gap: 20px - spaziatura tra elementi flex",
          "flex: 1 - elemento flessibile che cresce"
        ]
      },
      {
        titolo: "Layout: Grid",
        spiegazione: "Sistema bidimensionale per layout complessi con righe e colonne.",
        punti: [
          "display: grid - attiva grid",
          "grid-template-columns: 1fr 2fr 1fr - definisce colonne",
          "grid-template-rows: 100px auto - definisce righe",
          "gap: 20px - spaziatura tra celle",
          "grid-column: 1 / 3 - elemento occupa dalla colonna 1 alla 3",
          "grid-template-areas - layout con nomi di aree",
          "fr - unità frazionale per dividere spazio disponibile"
        ]
      },
      {
        titolo: "Positioning",
        spiegazione: "Controllo preciso della posizione degli elementi.",
        punti: [
          "static - posizionamento normale (default)",
          "relative - relativo alla posizione normale (può usare top, left)",
          "absolute - relativo al primo parent positioned (esce dal flusso)",
          "fixed - relativo al viewport (rimane fisso allo scroll)",
          "sticky - comportamento misto tra relative e fixed",
          "z-index - controlla sovrapposizione elementi"
        ]
      },
      {
        titolo: "Responsive Design",
        spiegazione: "Adattare il layout a diverse dimensioni di schermo.",
        punti: [
          "Media queries: @media (max-width: 768px) { }",
          "Mobile-first approach: inizia da mobile e aggiungi per desktop",
          "Unità responsive: %, vw, vh, rem, em",
          "rem - relativo alla font-size del root (html)",
          "em - relativo alla font-size del parent",
          "clamp(min, preferito, max) - valore fluido con limiti"
        ]
      }
    ],
    esempiCodice: [
      {
        titolo: "Selettori Avanzati",
        descrizione: "Esempi di selettori comuni nei progetti reali",
        codice: `/* Selettore di classe */
.button {
  background-color: blue;
  color: white;
}

/* Pseudo-classe hover */
.button:hover {
  background-color: darkblue;
  cursor: pointer;
}

/* Combinatore discendente */
.container p {
  color: gray;
}

/* Combinatore figlio diretto */
ul > li {
  list-style: none;
}

/* Pseudo-elemento */
.quote::before {
  content: '"';
  font-size: 2rem;
}

/* Selettori multipli */
h1, h2, h3 {
  font-family: Arial, sans-serif;
}`
      },
      {
        titolo: "Box Model Completo",
        descrizione: "Gestione completa di padding, border e margin",
        codice: `/* Box model classico */
.card {
  width: 300px;
  padding: 20px;          /* Spazio interno */
  border: 2px solid #ddd; /* Bordo */
  margin: 10px;           /* Spazio esterno */
  background-color: white;
}

/* Box model moderno (consigliato) */
* {
  box-sizing: border-box; /* Include padding e border in width */
}

.modern-card {
  width: 300px;           /* Larghezza totale, include padding */
  padding: 20px;
  border: 2px solid #ddd;
}

/* Margin auto per centrare */
.centered {
  width: 80%;
  margin: 0 auto;         /* Centra orizzontalmente */
}`
      },
      {
        titolo: "Flexbox Layout",
        descrizione: "Layout responsive con flexbox",
        codice: `/* Container flex */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Spazio tra gli elementi */
  align-items: center;            /* Allinea verticalmente */
  gap: 20px;                      /* Spazio tra elementi */
  flex-wrap: wrap;                /* Va a capo se necessario */
}

/* Elementi flex */
.item {
  flex: 1;                        /* Crescono ugualmente */
  min-width: 200px;
}

.item:first-child {
  flex: 2;                        /* Primo item doppio */
}

/* Centra perfettamente con flex */
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`
      },
      {
        titolo: "CSS Grid Layout",
        descrizione: "Layout complesso con Grid",
        codice: `/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 colonne */
  grid-template-rows: auto;
  gap: 20px;                           /* Spaziatura */
}

/* Layout con aree nominate */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`
      },
      {
        titolo: "Positioning Esempi",
        descrizione: "Vari tipi di posizionamento",
        codice: `/* Relative positioning */
.relative-box {
  position: relative;
  top: 20px;    /* 20px più in basso della posizione normale */
  left: 10px;
}

/* Absolute positioning */
.parent {
  position: relative;  /* Diventa riferimento per absolute */
}

.absolute-child {
  position: absolute;
  top: 0;
  right: 0;           /* Angolo in alto a destra del parent */
}

/* Fixed positioning (navbar fissa) */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
}

/* Sticky positioning */
.sticky-header {
  position: sticky;
  top: 0;            /* Si "attacca" quando raggiunge il top */
  background: white;
}`
      },
      {
        titolo: "Media Queries Responsive",
        descrizione: "Design responsive per vari dispositivi",
        codice: `/* Base styles (mobile first) */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet (768px e oltre) */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px e oltre) */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
  
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: white;
  }
}`
      },
      {
        titolo: "Variabili CSS e Animazioni",
        descrizione: "Features moderne di CSS",
        codice: `/* Variabili CSS (Custom Properties) */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 20px;
  --transition: all 0.3s ease;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  transition: var(--transition);
}

.button:hover {
  background-color: var(--secondary-color);
}

/* Animazioni */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: fadeIn 0.5s ease-in-out;
}

/* Transizioni */
.smooth-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.smooth-transition:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`
      }
    ],
    esercizi: [
      {
        titolo: "Card Component Responsive",
        descrizione: "Crea una card con immagine, titolo, descrizione e button. Deve essere responsive e avere effetti hover.",
        requisiti: [
          "Usa flexbox o grid per il layout interno",
          "Immagine che occupa 100% della larghezza",
          "Padding uniforme di 20px",
          "Border radius di 12px",
          "Box shadow per profondità",
          "Effetto hover: scale(1.05) e shadow più intenso",
          "Button centrato con colore di sfondo e hover state"
        ],
        suggerimento: "Usa transition: all 0.3s ease per animazioni smooth. Per centrare il button usa margin: 0 auto con display: block"
      },
      {
        titolo: "Navbar Responsive con Hamburger Menu",
        descrizione: "Crea una navbar che su mobile mostra un hamburger menu, su desktop mostra tutti i link",
        requisiti: [
          "Logo a sinistra, menu a destra su desktop",
          "Flexbox per allineamento",
          "position: fixed per navbar sempre visibile",
          "Media query: sotto 768px mostra hamburger icon",
          "Su mobile, menu verticale che si apre/chiude",
          "Smooth transition per apertura menu"
        ],
        suggerimento: "Usa @media (max-width: 768px) per mobile. Il menu può essere hidden di default e mostrato con una classe .active"
      },
      {
        titolo: "Grid Gallery 3 Colonne Responsive",
        descrizione: "Crea una galleria di immagini con CSS Grid che si adatta alle dimensioni dello schermo",
        requisiti: [
          "3 colonne su desktop (>1024px)",
          "2 colonne su tablet (768px-1024px)",
          "1 colonna su mobile (<768px)",
          "Gap di 20px tra le immagini",
          "Ogni immagine deve mantenere aspect ratio",
          "Hover effect sulle immagini (opacity, scale, overlay)"
        ],
        suggerimento: "Usa grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) per griglia automatica responsive"
      },
      {
        titolo: "Form Stilizzato",
        descrizione: "Stili per un form di registrazione moderno e accessibile",
        requisiti: [
          "Input con padding, border e border-radius",
          "Focus state visibile (outline o border colorato)",
          "Label sopra ogni input",
          "Placeholder con colore più chiaro",
          "Button full-width su mobile, auto su desktop",
          "Error state: input con bordo rosso",
          "Usa transizioni per effetti smooth"
        ],
        suggerimento: "Usa :focus per stile quando input è attivo. :invalid per mostrare errori. Adjacent sibling selector (+) per stilizzare label quando input è focused"
      },
      {
        titolo: "Loading Spinner Animato",
        descrizione: "Crea uno spinner di caricamento con solo CSS (no immagini)",
        requisiti: [
          "Usa @keyframes per animazione rotazione",
          "Border parziale per effetto spinner",
          "Animation infinita",
          "Centrato nella pagina",
          "Smooth rotation con animation-timing-function"
        ],
        suggerimento: "Usa border con colori diversi e border-radius: 50% per cerchio. @keyframes rotate con transform: rotate(360deg). animation: rotate 1s linear infinite"
      }
    ],
    codingTestTips: [
      {
        titolo: "box-sizing: border-box è Essenziale",
        contenuto: "Uno degli errori più comuni è dimenticare box-sizing: border-box. Metti sempre * { box-sizing: border-box; } all'inizio. Rende i calcoli di larghezza molto più semplici.",
        esempio: "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}"
      },
      {
        titolo: "Flexbox per Centrare",
        contenuto: "Per centrare elementi verticalmente e orizzontalmente, usa flexbox. È la soluzione più veloce e affidabile nei coding test.",
        esempio: ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}"
      },
      {
        titolo: "Unità: px vs rem vs %",
        contenuto: "Usa rem per font-size (scalabile), px per bordi/ombre (precisione), % o vw/vh per larghezze responsive. Nei test, dimostra di conoscere le differenze.",
        esempio: "/* ✅ Buona pratica */\nhtml { font-size: 16px; }\n.text { font-size: 1rem; }  /* 16px, scalabile */\n.container { width: 90%; }  /* Responsive */"
      },
      {
        titolo: "Mobile-First Media Queries",
        contenuto: "Inizia con stili per mobile, poi aggiungi @media (min-width: ...) per desktop. È più semplice e moderno rispetto a max-width.",
        esempio: "/* Base: mobile */\n.grid { grid-template-columns: 1fr; }\n\n/* Desktop */\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}"
      },
      {
        titolo: "Transition vs Animation",
        contenuto: "Usa transition per cambiamenti semplici (hover, focus). Usa @keyframes e animation per sequenze complesse. Non confonderli nei test!",
        esempio: "/* Transition: semplice */\n.btn { transition: all 0.3s; }\n.btn:hover { transform: scale(1.1); }\n\n/* Animation: complessa */\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n.pulse { animation: pulse 2s infinite; }"
      },
      {
        titolo: "Specificity e !important",
        contenuto: "Evita !important il più possibile. Dimostra che conosci la specificità: inline styles > ID > classe > tag. Nei test, usa classi per tutto.",
        esempio: "/* ❌ Male */\n.text { color: blue !important; }\n\n/* ✅ Bene - aumenta specificità */\n.container .text { color: blue; }"
      },
      {
        titolo: "Flexbox: justify vs align",
        contenuto: "Confondere justify-content e align-items è comune. Ricorda: justify è per l'asse principale (direction), align per l'asse trasversale.",
        esempio: "/* flex-direction: row (default) */\n.flex {\n  display: flex;\n  justify-content: center;  /* orizzontale */\n  align-items: center;      /* verticale */\n}\n\n/* flex-direction: column */\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;  /* verticale */\n  align-items: center;      /* orizzontale */\n}"
      }
    ]
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