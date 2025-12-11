import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    nome: "HTML",
    descrizione: "Ottima strutturazione semantica del documento.",
    percentuale: "90%",
    concettiChiave: [
      {
        titolo: "🏗️ Struttura Base",
        spiegazione: "Ogni pagina HTML inizia con una struttura fondamentale che definisce come il browser interpreta il contenuto.",
        punti: [
          "<!DOCTYPE html> - Dichiarazione iniziale (la prima riga)",
          "<html> - Elemento radice (root)",
          "<head> - Contiene i metadati (non visibile nella pagina)",
          "<title> - Titolo della scheda del browser",
          "<meta> - Definisce i metadati (es. charset, viewport)",
          "<link> - Collega file esterni (es. CSS)",
          "<script> - Inserisce o collega codice JavaScript",
          "<body> - Contiene i contenuti visibili della pagina"
        ]
      },
      {
        titolo: "🧱 Elementi e Semantica",
        spiegazione: "I tag HTML descrivono la struttura e il significato del contenuto. Conoscere la differenza tra elementi di blocco e inline è fondamentale.",
        punti: [
          "Tag: Istruzioni racchiuse tra parentesi angolari (es. <h1>)",
          "Attributi: Informazioni aggiuntive nei tag di apertura (es. class=\"...\", href=\"...\")",
          "Elementi di Blocco: Occupano l'intera larghezza (es. <div>, <p>, <h1>-<h6>)",
          "Elementi Inline: Occupano solo lo spazio necessario (es. <span>, <a>, <strong>)",
          "<div> - Contenitore generico (di blocco)",
          "<span> - Contenitore generico (inline)",
          "<header> - Contenuto introduttivo (es. logo, navigazione)",
          "<nav> - Contiene link di navigazione",
          "<main> - Contenuto principale unico della pagina",
          "<section> - Raggruppa contenuti tematicamente correlati",
          "<article> - Contenuto autonomo e indipendente (es. post di blog)",
          "<footer> - Contenuto finale (es. copyright, contatti)"
        ]
      },
      {
        titolo: "📄 Contenuti Comuni",
        spiegazione: "Gli elementi più utilizzati per strutturare e presentare il contenuto nelle pagine web.",
        punti: [
          "<h1> - <h6> - Titoli (dal più importante al meno importante)",
          "<p> - Paragrafo di testo",
          "<a> - Link (usa l'attributo href)",
          "<img> - Immagine (usa gli attributi src e alt)",
          "<ul> / <ol> / <li> - Liste non ordinate / ordinate / elementi della lista",
          "<br> - Interruzione di riga",
          "<strong> / <b> - Testo in grassetto (strong = semantico, b = solo stile)",
          "<em> / <i> - Testo in corsivo (em = enfasi, i = solo stile)",
          "<blockquote> - Citazione lunga",
          "<code> - Codice inline, <pre> - Blocco di codice preformattato"
        ]
      },
      {
        titolo: "📥 Form e Input",
        spiegazione: "I form permettono agli utenti di inviare dati. Ogni input ha un type specifico per validazione e UX migliore.",
        punti: [
          "<form> - Contenitore per l'invio dei dati (usa l'attributo action e method)",
          "<input> - Campo di inserimento dati (usa l'attributo type per definire il tipo: text, password, email, submit, ecc.)",
          "<label> - Etichetta per un input (collega con for=\"id\" o wrappa l'input)",
          "<button> - Bottone cliccabile (type=\"submit\", \"button\", \"reset\")",
          "<textarea> - Campo per testo multi-linea",
          "<select> / <option> - Menu a tendina",
          "Attributi importanti: required, placeholder, value, name, id",
          "Tipi input comuni: text, email, password, number, date, checkbox, radio, file, range"
        ]
      },
      {
        titolo: "🎯 Attributi Globali Importanti",
        spiegazione: "Attributi utilizzabili su qualsiasi elemento HTML per identificazione, stile e accessibilità.",
        punti: [
          "id - Identificatore unico per l'elemento",
          "class - Una o più classi CSS (separate da spazio)",
          "style - Stili CSS inline",
          "data-* - Attributi personalizzati per dati (es. data-user-id=\"123\")",
          "title - Tooltip al passaggio del mouse",
          "aria-* - Attributi per accessibilità (es. aria-label, aria-hidden)",
          "lang - Lingua del contenuto",
          "tabindex - Ordine di navigazione con Tab"
        ]
      },
      {
        titolo: "📊 Liste e Tabelle",
        spiegazione: "Strutture per organizzare dati in modo ordinato e accessibile.",
        punti: [
          "<ul> - Lista non ordinata (pallini)",
          "<ol> - Lista ordinata (numeri) - usa type=\"1|a|A|i|I\"",
          "<li> - Elemento di lista",
          "<dl> / <dt> / <dd> - Lista di definizioni (termine e descrizione)",
          "<table> - Tabella",
          "<thead>, <tbody>, <tfoot> - Sezioni della tabella",
          "<tr> - Riga, <th> - Intestazione, <td> - Cella",
          "colspan / rowspan - Celle che occupano più colonne/righe"
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
    ]
  },
  {
    nome: "CSS",
    descrizione: "Stile efficace.",
    percentuale: "80%",
    concettiChiave: [
      {
        titolo: "🏷️ Sintassi e Struttura",
        spiegazione: "La base di CSS: come è strutturata una regola e come funziona il sistema di applicazione degli stili.",
        punti: [
          "Regola CSS: Blocco completo (Selettore + Dichiarazioni)",
          "Selettore: Parte che identifica gli elementi HTML da stilizzare (es. p, .classe, #id)",
          "Dichiarazione: Proprietà e Valore (es. color: red;)",
          "Proprietà: Caratteristica da modificare (es. font-size)",
          "Valore: Il dato assegnato alla proprietà (es. 16px)",
          "Cascade (Cascata): L'ordine in cui le regole vengono applicate (ultima regola vince)",
          "Specificity (Specificità): Il peso di un selettore (ID > Classe > Tag)",
          "Inheritance (Eredità): Proprietà ereditate dagli elementi genitore (es. color, font-family)"
        ]
      },
      {
        titolo: "🎯 Selettori Fondamentali",
        spiegazione: "I selettori definiscono quali elementi HTML vengono stilizzati. Conoscerli bene è fondamentale.",
        punti: [
          "Selettore di Tipo: Stilizzi un tag HTML (es. p { ... })",
          "Selettore di Classe: Stilizzi con un punto (.nome-classe { ... })",
          "Selettore di ID: Stilizzi con un hashtag (#nome-id { ... })",
          "Selettore Universale: Seleziona tutto (* { ... })",
          "Selettore di Figlio: Seleziona figli diretti (div > p { ... })",
          "Pseudo-classi: Stilizzi elementi in stati specifici (es. :hover, :focus, :first-child)",
          "Pseudo-elementi: Stilizzi parti specifiche di un elemento (es. ::before, ::after)"
        ]
      },
      {
        titolo: "📦 Modello a Scatola e Dimensioni",
        spiegazione: "Ogni elemento HTML è una scatola. Il box model definisce dimensioni e spaziature.",
        punti: [
          "Box Model: Ogni elemento è una scatola composta da Contenuto, Padding, Border, Margin",
          "content: Lo spazio in cui risiede il contenuto",
          "padding: Spazio interno tra contenuto e bordo",
          "border: Linea che circonda il padding",
          "margin: Spazio esterno che separa le scatole",
          "width / height: Dimensioni del contenuto",
          "box-sizing: border-box;: Regola cruciale; fa sì che padding e border siano inclusi in width/height",
          "Unità di Misura: px, %, em (relativo al font del genitore), rem (relativo al font radice), vw / vh (percentuale della viewport)"
        ]
      },
      {
        titolo: "📐 Layout e Posizionamento",
        spiegazione: "Le proprietà fondamentali per controllare il layout e la posizione degli elementi.",
        punti: [
          "display: La proprietà più importante per il layout (valori chiave: block, inline, inline-block, flex, grid)",
          "position: Determina la posizione (valori chiave: static, relative, absolute, fixed, sticky)",
          "float: Usato per affiancare elementi (raro oggi, sostituito da Flexbox)",
          "Flexbox (Layout 1D): display: flex; justify-content (orizzontale), align-items (verticale)",
          "Grid (Layout 2D): display: grid; grid-template-columns / grid-template-rows definisce la struttura a griglia",
          "z-index: Definisce l'ordine di impilamento degli elementi posizionati (numeri più alti sopra)"
        ]
      },
      {
        titolo: "Layout: Flexbox Dettagliato",
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
        titolo: "Layout: Grid Dettagliato",
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
        titolo: "🎨 Estetica e Tipografia",
        spiegazione: "Proprietà fondamentali per stilizzare testo, colori e animazioni.",
        punti: [
          "color: Colore del testo",
          "background-color: Colore dello sfondo",
          "font-family: Tipo di carattere",
          "font-size: Dimensione del testo",
          "text-align: Allineamento del testo (left, center, right)",
          "opacity: Trasparenza dell'elemento",
          "transition: Animazione graduale di una proprietà CSS",
          "@media query: Utilizzato per il Responsive Design (adattare lo stile a diverse dimensioni dello schermo)"
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
      },
      {
        titolo: "➕ Concetti Aggiuntivi Cruciali",
        spiegazione: "Features moderne di CSS essenziali per codice manutenibile e responsive.",
        punti: [
          "Variabili CSS (Custom Properties): Dichiarate con --nome-variabile (es. --colore-primario: blue;), richiamate con var(--nome-variabile). Essenziali per manutenibilità e temi (es. modalità scura)",
          "Unità Flessibili Viewport: vh (Viewport Height) e vw (Viewport Width) permettono di dimensionare elementi in base alla dimensione dello schermo, rendendoli nativamente responsive (es. width: 50vw è metà della larghezza dello schermo)",
          "Z-Index: Definisce l'ordine di impilamento degli elementi posizionati (position: absolute/fixed/relative/sticky). Numeri più alti sono sopra elementi con numeri più bassi"
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
    ]
  },
  {
    nome: "JavaScript",
    descrizione: "Competenza avanzata, con piena padronanza delle funzionalità ES6+ per codice pulito e performante.",
    percentuale: "90%",
    concettiChiave: [
      {
        titolo: "📊 Variabili e Tipi di Dati",
        spiegazione: "Fondamenta di JavaScript: come dichiarare variabili e i tipi di dati disponibili.",
        punti: [
          "Dichiarazione: Parole chiave let (riassegnabile) e const (costante, preferita). Evitare var",
          "Tipi Primitivi: string, number, boolean, null, undefined, symbol, bigint",
          "Tipi Riferimento: object (include Array e Function)",
          "Tipizzazione: JS è a tipizzazione debole e dinamica",
          "Coercizione: Conversione automatica di un tipo in un altro (attenzione a ==)",
          "Strict Equality: === (confronta valore E tipo, sempre preferito)",
          "Hoisting: Le dichiarazioni function sono hoisted (puoi chiamarle prima che siano definite). let e const NON sono hoisted e causano errore se usate prima della dichiarazione"
        ]
      },
      {
        titolo: "🔄 Strutture Logiche e Cicli",
        spiegazione: "Controllo del flusso del programma: condizionali e iterazioni.",
        punti: [
          "Condizionali: Struttura if / else if / else e switch",
          "Ternario: Sintassi compatta per condizionali semplici: condizione ? vero : falso",
          "Ciclo for classico: Per iterare con un contatore",
          "Ciclo for...of: Per iterare gli elementi di Array",
          "Ciclo for...in: Per iterare le proprietà di Oggetti",
          "break / continue: Controllare il flusso all'interno dei cicli"
        ]
      },
      {
        titolo: "⚙️ Funzioni e Scope",
        spiegazione: "Come definire funzioni e comprendere la visibilità delle variabili.",
        punti: [
          "Funzione Dichiarata: Sintassi standard: function nomeFunzione() {}",
          "Arrow Function: Sintassi compatta, essenziale nel codice moderno/React: const nome = () => {}",
          "return: Valore restituito dalla funzione",
          "Scope (Ambito): Regole di visibilità delle variabili (let / const sono block-scoped, visibili solo nel blocco di codice)",
          "Closure: Una funzione ricorda il suo ambiente esterno anche quando è eseguita altrove",
          "this in regular function: dipende da come è chiamata",
          "this in arrow function: ereditato dallo scope esterno"
        ]
      },
      {
        titolo: "📦 Strutture Dati Complesse",
        spiegazione: "Array e Oggetti: come manipolarli e accedere ai loro dati.",
        punti: [
          "Array: Liste indicizzate di valori",
          "Metodi Chiave: .push(), .pop(), .slice(), .splice()",
          "Metodi Funzionali (cruciali): .map(), .filter(), .reduce(), .forEach()",
          "Oggetti: Coppie chiave-valore",
          "Accesso: Con dot notation (obj.prop) o bracket notation (obj['prop'])",
          "Destructuring: Sintassi per estrarre valori da Array/Oggetti in variabili separate",
          "Spread Operator: Sintassi ... per espandere Array o Oggetti (utilissimo per copiarli)"
        ]
      },
      {
        titolo: "Array Methods Essenziali",
        spiegazione: "I metodi degli array sono fondamentali per manipolare dati. Conoscerli bene è essenziale.",
        punti: [
          "map() - trasforma ogni elemento, ritorna nuovo array",
          "filter() - filtra elementi che passano un test, ritorna nuovo array",
          "reduce() - riduce array a un singolo valore",
          "find() - trova primo elemento che passa test",
          "forEach() - esegue funzione per ogni elemento (non ritorna nulla)",
          "some() / every() - verifica se almeno uno/tutti passano test (boolean)",
          "slice() - copia porzione array, splice() - modifica array originale"
        ]
      },
      {
        titolo: "Destructuring e Spread",
        spiegazione: "Sintassi moderna per estrarre valori da oggetti/array e copiare/spreadare valori.",
        punti: [
          "Destructuring array: const [a, b] = [1, 2]",
          "Destructuring oggetto: const {name, age} = person",
          "Default values: const {name = 'Guest'} = user",
          "Rest operator: const [first, ...rest] = array",
          "Spread operator: [...array1, ...array2] per copiare/merge",
          "Spread in oggetti: {...obj1, ...obj2} per merge oggetti"
        ]
      },
      {
        titolo: "⏳ Asincronicità (API e Promises)",
        spiegazione: "Gestione di operazioni asincrone: come gestire chiamate API e operazioni non bloccanti.",
        punti: [
          "Asincronicità: Operazioni che non bloccano il thread principale (es. chiamate API)",
          "Callback: Funzioni passate come argomenti, eseguite dopo l'operazione",
          "Promise: Oggetto per gestire il risultato di un'operazione asincrona (Stati: Pending, Fulfilled, Rejected)",
          "Sintassi: .then() (successo) e .catch() (errore)",
          "async / await: Sintassi moderna per gestire le Promise in modo più leggibile (sembrano sincrone)",
          "Regola: await può essere usato solo all'interno di una funzione dichiarata async",
          "Promise.all() - aspetta tutte le promises, Promise.race() - ritorna la prima che si risolve"
        ]
      },
      {
        titolo: "🧩 Programmazione Orientata agli Oggetti (OOP)",
        spiegazione: "Sintassi ES6+ per creare classi e gestire l'ereditarietà in JavaScript.",
        punti: [
          "Classi: La sintassi base per definire i 'blueprint' degli oggetti (introdotti con ES6). Sintassi: class NomeClasse {}",
          "constructor: Metodo speciale per inizializzare le proprietà dell'oggetto quando viene creato",
          "this: Riferimento all'oggetto corrente all'interno di un metodo o costruttore",
          "Ereditarietà: Estendere una classe esistente. Sintassi: class Figlio extends Genitore {}",
          "super(): Usato all'interno del costruttore di una sottoclasse per chiamare il costruttore del genitore"
        ]
      },
      {
        titolo: "📦 Moduli (Organizzazione del Codice)",
        spiegazione: "Come organizzare il codice in file separati e importare/esportare funzionalità.",
        punti: [
          "import: Sintassi per includere codice esportato da un altro file (cruciale in React/Node.js)",
          "Sintassi (Named): import { funzione } from './file.js'",
          "Sintassi (Default): import NomeDefault from './file.js'",
          "export: Sintassi per rendere funzioni, classi o variabili disponibili per l'uso in altri file",
          "Sintassi (Named): export const miaVariabile = 10",
          "Sintassi (Default): export default function()"
        ]
      },
      {
        titolo: "🚀 Funzionalità Avanzate",
        spiegazione: "Features moderne di ES6+ per scrivere codice più pulito e potente.",
        punti: [
          "Template Literals (Backticks): Stringhe che supportano interpolazione e multi-linea. Sintassi: `Ciao ${variabile}`",
          "Rest Parameters: Raccogliere un numero indefinito di argomenti di una funzione in un array. Sintassi: function somma(...numeri) {}",
          "Optional Chaining: Modo sicuro per accedere a proprietà annidate senza far crashare il programma se una proprietà è null o undefined. Sintassi: oggetto?.proprieta?.sottoproprieta",
          "Destructuring: Sintassi per estrarre valori da Array/Oggetti in variabili separate",
          "Spread Operator: Sintassi ... per espandere Array o Oggetti (utilissimo per copiarli)"
        ]
      },
      {
        titolo: "🔒 Immutabilità",
        spiegazione: "Principio fondamentale in React e programmazione funzionale: non modificare lo stato originale.",
        punti: [
          "Immutabilità: Il principio di non modificare lo stato originale. Essenziale in React e nella programmazione funzionale",
          "Quando lavori con Array/Oggetti, usa lo Spread Operator (...) o metodi come .map()/.filter() per creare una nuova copia e modificarla, invece di modificare l'originale",
          "Esempio di Immutabilità: Non array.push(nuovoElemento), ma const nuovoArray = [...array, nuovoElemento]",
          "Benefici: Prevedibilità, debugging più facile, ottimizzazioni in React"
        ]
      },
      {
        titolo: "Closures e Higher-Order Functions",
        spiegazione: "Le closures permettono alle funzioni di accedere a variabili dello scope esterno anche dopo che è chiuso.",
        punti: [
          "Closure: funzione che ha accesso a variabili dello scope esterno",
          "Higher-order function: funzione che prende/ritorna altre funzioni",
          "Esempio: function outer() { const x = 1; return function inner() { return x; } }",
          "Usate per: data privacy, function factories, event handlers",
          "Attenzione a loop con closures (problema classico con var)"
        ]
      },
      {
        titolo: "this e Binding",
        spiegazione: "'this' in JavaScript è determinato da come viene chiamata la funzione, non da dove è definita.",
        punti: [
          "this in regular function: dipende da come è chiamata",
          "this in arrow function: ereditato dallo scope esterno",
          "bind() - crea nuova funzione con this fissato",
          "call() / apply() - chiama funzione con this specificato",
          "this in oggetti: punta all'oggetto che chiama il metodo",
          "this in event handlers: punta all'elemento che ha scatenato l'evento"
        ]
      },
      {
        titolo: "🛡️ Error Handling (Gestione Errori)",
        spiegazione: "Come gestire gli errori in JavaScript: fondamentale per codice robusto e per gestire operazioni asincrone.",
        punti: [
          "try/catch/finally: Blocchi per gestire errori. try esegue il codice, catch cattura errori, finally esegue sempre",
          "throw: Lancia un errore personalizzato. Sintassi: throw new Error('messaggio')",
          "Error objects: Error, TypeError, ReferenceError, SyntaxError - tipi di errori predefiniti",
          "try/catch con async/await: Essenziale per gestire errori nelle Promise",
          "Promise.catch(): Metodo alternativo per gestire errori nelle Promise",
          "Best practice: Sempre gestire errori nelle operazioni asincrone e validare input"
        ]
      },
      {
        titolo: "✅ Truthy/Falsy Values",
        spiegazione: "Valori che vengono valutati come true o false nei contesti booleani. Fondamentale per capire i condizionali.",
        punti: [
          "Falsy values: false, 0, '' (stringa vuota), null, undefined, NaN - valutati come false",
          "Truthy values: Tutto il resto è truthy (oggetti, array non vuoti, stringhe non vuote, numeri diversi da 0)",
          "Uso nei condizionali: if (value) controlla se value è truthy",
          "Pattern comune: if (array.length) controlla se l'array non è vuoto",
          "Attenzione: [] e {} sono truthy anche se vuoti! Usa .length o Object.keys().length per verificare",
          "Doppia negazione: !!value converte un valore in boolean esplicito"
        ]
      },
      {
        titolo: "🔍 Typeof e Instanceof",
        spiegazione: "Operatori per verificare i tipi di dati e le istanze di classi. Utili per type checking e debugging.",
        punti: [
          "typeof: Verifica il tipo di un valore primitivo. Ritorna stringa: 'string', 'number', 'boolean', 'undefined', 'object', 'function', 'symbol', 'bigint'",
          "typeof limitazioni: typeof null ritorna 'object' (bug storico), typeof array ritorna 'object'",
          "instanceof: Verifica se un oggetto è un'istanza di una classe. Sintassi: obj instanceof ClassName",
          "Array.isArray(): Metodo specifico per verificare se un valore è un array (più affidabile di typeof)",
          "Uso pratico: Type checking prima di operazioni, validazione input, debugging",
          "Pattern: typeof value === 'string' && value.length > 0"
        ]
      },
      {
        titolo: "📄 JSON (JavaScript Object Notation)",
        spiegazione: "Formato standard per scambiare dati. Essenziale per comunicare con API e salvare dati.",
        punti: [
          "JSON.parse(): Converte una stringa JSON in un oggetto JavaScript. Sintassi: JSON.parse(jsonString)",
          "JSON.stringify(): Converte un oggetto JavaScript in una stringa JSON. Sintassi: JSON.stringify(obj)",
          "Uso comune: Comunicazione con API REST, salvare dati in localStorage, trasferire dati tra client e server",
          "Limitazioni: JSON non supporta funzioni, undefined, Symbol, Date (vengono convertiti o omessi)",
          "Secondo parametro: JSON.stringify(obj, null, 2) formatta con indentazione per leggibilità",
          "Error handling: Sempre usare try/catch con JSON.parse() perché può lanciare errori con stringhe malformate"
        ]
      },
      {
        titolo: "⚡ Logical Operators (Short-Circuit Evaluation)",
        spiegazione: "Gli operatori logici && e || non ritornano solo boolean, ma utilizzano short-circuit evaluation per ottimizzare.",
        punti: [
          "&& (AND): Ritorna il primo valore falsy o l'ultimo valore se tutti sono truthy. Si ferma al primo falsy",
          "|| (OR): Ritorna il primo valore truthy o l'ultimo valore se tutti sono falsy. Si ferma al primo truthy",
          "Pattern comune: value || defaultValue - assegna un valore di default se value è falsy",
          "Pattern comune: obj && obj.property - accede a proprietà solo se obj esiste (evita errori)",
          "Pattern moderno: obj?.property (Optional Chaining) è preferibile a obj && obj.property",
          "Esempio: const name = user.name || 'Guest' - assegna 'Guest' se user.name è falsy"
        ]
      }
    ],
    esempiCodice: [
      {
        titolo: "Array Methods in Azione",
        descrizione: "Esempi pratici dei metodi array più usati",
        codice: `// map - trasforma ogni elemento
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]

// filter - filtra elementi
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - riduce a un valore
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10

// find - trova primo elemento
const found = numbers.find(n => n > 2);
// 3

// some / every - verifica condizioni
const hasEven = numbers.some(n => n % 2 === 0); // true
const allEven = numbers.every(n => n % 2 === 0); // false`
      },
      {
        titolo: "Destructuring e Spread",
        descrizione: "Sintassi moderna per lavorare con oggetti e array",
        codice: `// Destructuring array
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Destructuring oggetto
const person = { name: 'Mario', age: 30, city: 'Roma' };
const { name, age } = person;
// name = 'Mario', age = 30

// Con default values
const { name = 'Guest', role = 'user' } = user;

// Spread operator - copia array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread in oggetti - merge
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }`
      },
      {
        titolo: "Async/Await Pattern",
        descrizione: "Gestione asincrona moderna e leggibile",
        codice: `// Con async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Promise.all - eseguire più async in parallelo
async function fetchMultipleUsers(ids) {
  const promises = ids.map(id => fetchUserData(id));
  const users = await Promise.all(promises);
  return users;
}

// Promise.race - prima che si risolve
async function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), timeout)
  );
  return Promise.race([fetchPromise, timeoutPromise]);
}`
      },
      {
        titolo: "Closures e Function Factories",
        descrizione: "Esempi pratici di closures",
        codice: `// Closure semplice
function outer() {
  const x = 10;
  return function inner() {
    return x; // ha accesso a x anche dopo che outer() è finita
  };
}

const getX = outer();
console.log(getX()); // 10

// Function factory
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount(); // 2

// Fix problema loop con closures
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 (con let)
}

// Con var sarebbe: 3, 3, 3`
      },
      {
        titolo: "Arrow Functions vs Regular Functions",
        descrizione: "Quando usare quale",
        codice: `// Arrow function - this legato al contesto esterno
const obj = {
  name: 'Test',
  regular: function() {
    console.log(this.name); // 'Test' - this = obj
  },
  arrow: () => {
    console.log(this.name); // undefined - this = window/global
  }
};

// Arrow per callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Regular quando serve this dinamico
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // button element
});

// Arrow non può essere constructor
const Person = (name) => {
  this.name = name; // Error!
};

// Regular può essere constructor
function Person(name) {
  this.name = name;
}
const p = new Person('Mario');`
      },
      {
        titolo: "Template Literals e String Methods",
        descrizione: "Sintassi moderna per stringhe",
        codice: `// Template literals
const name = 'Mario';
const age = 30;
const message = \`Ciao, sono \${name} e ho \${age} anni\`;

// Multi-line strings
const html = \`
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : ''),
    ''
  );
}

const name = 'Mario';
highlight\`Hello \${name}!\`; // "Hello <mark>Mario</mark>!"

// String methods
const str = 'Hello World';
str.includes('World'); // true
str.startsWith('Hello'); // true
str.endsWith('World'); // true
str.repeat(3); // 'Hello WorldHello WorldHello World'`
      },
      {
        titolo: "Object Methods e Computed Properties",
        descrizione: "Metodi moderni per lavorare con oggetti",
        codice: `// Object.keys, values, entries
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj); // ['a', 'b', 'c']
Object.values(obj); // [1, 2, 3]
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// Object.assign e spread
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }
// o con spread:
const merged2 = { ...obj1, ...obj2 };

// Computed property names
const key = 'name';
const obj = {
  [key]: 'Mario', // obj.name = 'Mario'
  ['age']: 30
};

// Method shorthand
const obj = {
  // vecchio modo
  oldMethod: function() { return 'old'; },
  // nuovo modo
  newMethod() { return 'new'; }
};`
      }
    ]
  },
  {
    nome: "PHP",
    descrizione: "Sviluppo backend robusto.",
    percentuale: "80%",
    concettiChiave: [
      {
        titolo: "🏷️ Struttura Base e Variabili",
        spiegazione: "Fondamenta di PHP: sintassi base, variabili e output.",
        punti: [
          "Tag di Apertura/Chiusura: Il codice PHP deve essere racchiuso tra <?php e ?>",
          "Terminatore: Tutte le istruzioni PHP terminano con il punto e virgola (;)",
          "Variabili: Le variabili iniziano sempre con il simbolo del dollaro ($). Esempio: $nome_variabile = 'valore'",
          "Output: Per stampare un valore a schermo: echo (o print)",
          "Commenti: // (riga singola) o /* ... */ (multilinea)",
          "Concatenazione: Utilizza il punto (.) per unire stringhe (NON il + come in JS)",
          "Tipi: PHP è a tipizzazione debole, ma supporta dichiarazioni di tipo esplicite (es. string, int, array)"
        ]
      },
      {
        titolo: "🔄 Strutture Dati e Cicli",
        spiegazione: "Array e iterazioni: come gestire collezioni di dati in PHP.",
        punti: [
          "Array Indicizzati (Numerici): Simili a quelli in JS. Sintassi: $array = [1, 2, 3]",
          "Array Associativi (Oggetti/Mappe): Usano chiavi nominali invece di indici numerici. Sintassi: $persona = ['nome' => 'Mario', 'età' => 30]",
          "Accesso: $persona['nome'] per accedere agli array associativi",
          "Ciclo for classico: Uguale al JS per iterare con un contatore",
          "Ciclo foreach (Essenziale): Per iterare Array. Sintassi 1 (Solo valore): foreach ($array as $valore) { ... }",
          "Ciclo foreach Sintassi 2 (Chiave e valore): foreach ($array as $chiave => $valore) { ... }",
          "Condizionali: Uguali a JS (if / else if / else, switch)"
        ]
      },
      {
        titolo: "⚙️ Funzioni e Scope",
        spiegazione: "Come definire funzioni e comprendere la visibilità delle variabili in PHP.",
        punti: [
          "Dichiarazione Funzione: Sintassi standard: function nomeFunzione($parametro) { ... return $risultato; }",
          "Valori di Default: Dichiarati nell'argomento della funzione (es. function saluta($nome = 'Ospite'))",
          "Variabili Globali: Le variabili definite fuori da una funzione non sono accessibili dentro senza usare la parola chiave global (da usare con cautela)",
          "Passaggio per Riferimento: È possibile passare un parametro per riferimento usando & (es. function modifica(&$valore))",
          "return: Valore restituito dalla funzione"
        ]
      },
      {
        titolo: "📦 Programmazione Orientata agli Oggetti (OOP)",
        spiegazione: "Sintassi per creare classi, oggetti e gestire l'ereditarietà in PHP.",
        punti: [
          "Classe: Definizione di un oggetto. Sintassi: class NomeClasse { ... }",
          "Oggetto/Istanziamento: Creazione di un oggetto: $oggetto = new NomeClasse()",
          "Accesso ai Metodi/Proprietà: Usa l'operatore freccia (->) o operatore di accesso agli oggetti: $oggetto->metodo()",
          "Proprietà/Metodi: Accessibilità definita da public, protected, private",
          "$this->: Riferimento all'istanza corrente della classe",
          "Ereditarietà: class Figlio extends Genitore { ... }"
        ]
      },
      {
        titolo: "💾 PHP Backend e File",
        spiegazione: "Concetti fondamentali per lo sviluppo backend: inclusione file e variabili superglobali.",
        punti: [
          "Inclusione File: include 'file.php'; o require 'file.php'; (La versione _once impedisce inclusioni multiple)",
          "Variabili Superglobali (CRUCIALI): Array associativi speciali accessibili ovunque",
          "$_GET: Dati passati tramite URL (query string)",
          "$_POST: Dati inviati tramite form (metodo POST)",
          "$_SESSION: Dati persistenti tra le pagine per un utente",
          "Altre superglobali: $_SERVER, $_COOKIE, $_FILES, $_REQUEST"
        ]
      },
      {
        titolo: "📦 Namespace (Spazi dei Nomi)",
        spiegazione: "Strumento per organizzare le classi e prevenire conflitti di nome tra librerie diverse (essenziale in Laravel).",
        punti: [
          "Concetto: Organizza le classi e previene conflitti di nome tra librerie diverse",
          "Sintassi (Definizione): namespace App\\Http\\Controllers; (dichiarato all'inizio del file)",
          "Sintassi (Uso): use App\\Modelli\\Utente; (per importare una classe da un altro namespace e usarla direttamente)",
          "Essenziale in Laravel: Ogni classe ha il suo namespace per organizzazione",
          "Backslash (\\\\): Separatore per i namespace in PHP"
        ]
      },
      {
        titolo: "⚙️ Metodi Statici",
        spiegazione: "Metodi o proprietà che appartengono alla classe stessa, non all'istanza specifica dell'oggetto.",
        punti: [
          "Concetto: Metodi o proprietà che appartengono alla classe stessa, non all'istanza specifica dell'oggetto. Non richiedono l'uso di new",
          "Dichiarazione: public static function nomeMetodo() {}",
          "Uso: Accesso diretto tramite l'operatore di risoluzione dell'ambito (doppio due punti): NomeClasse::nomeMetodo()",
          "Esempio in Laravel: Route::get(...) - Route è una classe con metodi statici",
          "Vantaggi: Non serve istanziare la classe, accesso diretto ai metodi"
        ]
      },
      {
        titolo: "🛑 Gestione delle Eccezioni",
        spiegazione: "Il modo formale per gestire gli errori gravi che interrompono l'esecuzione del codice (cruciale per il debugging).",
        punti: [
          "Concetto: Il modo formale per gestire gli errori gravi che interrompono l'esecuzione del codice (cruciale per il debugging)",
          "Sintassi: Si usa il blocco try...catch (molto simile a JavaScript)",
          "try: Contiene il codice che potrebbe generare un errore",
          "catch (Exception $e): Cattura l'oggetto Exception e permette di gestirlo",
          "$e->getMessage(): Metodo per ottenere il messaggio di errore",
          "Best practice: Sempre gestire eccezioni nelle operazioni critiche (database, file, API)"
        ]
      }
    ],
    esempiCodice: [
      {
        titolo: "Struttura Base e Variabili",
        descrizione: "Sintassi fondamentale di PHP",
        codice: `<?php
// Variabili
$nome = "Mario";
$eta = 30;
$attivo = true;

// Output
echo "Ciao, sono " . $nome; // Concatenazione con punto
print "Ho " . $eta . " anni";

// Commenti
// Questo è un commento su una riga
/* Questo è un 
   commento multilinea */

// Tipizzazione esplicita (PHP 7+)
function saluta(string $nome): string {
    return "Ciao " . $nome;
}`
      },
      {
        titolo: "Array e Foreach",
        descrizione: "Gestione di array indicizzati e associativi",
        codice: `<?php
// Array indicizzato
$numeri = [1, 2, 3, 4, 5];

// Array associativo
$persona = [
    'nome' => 'Mario',
    'eta' => 30,
    'citta' => 'Roma'
];

// Accesso
echo $persona['nome']; // Mario

// Foreach - solo valori
foreach ($numeri as $numero) {
    echo $numero . " ";
}

// Foreach - chiave e valore
foreach ($persona as $chiave => $valore) {
    echo $chiave . ": " . $valore . "\\n";
}`
      },
      {
        titolo: "Funzioni e Scope",
        descrizione: "Definizione di funzioni con parametri e valori di default",
        codice: `<?php
// Funzione base
function saluta($nome) {
    return "Ciao " . $nome;
}

// Valore di default
function salutaDefault($nome = 'Ospite') {
    return "Ciao " . $nome;
}

// Passaggio per riferimento
function incrementa(&$valore) {
    $valore++;
}

$numero = 5;
incrementa($numero);
echo $numero; // 6

// Variabile globale (da usare con cautela)
$globale = "Sono globale";

function mostraGlobale() {
    global $globale;
    echo $globale;
}`
      },
      {
        titolo: "OOP - Classi e Oggetti",
        descrizione: "Creazione di classi, oggetti e uso dell'ereditarietà",
        codice: `<?php
// Definizione classe
class Persona {
    public $nome;
    private $eta;
    
    public function __construct($nome, $eta) {
        $this->nome = $nome;
        $this->eta = $eta;
    }
    
    public function saluta() {
        return "Ciao, sono " . $this->nome;
    }
    
    public function getEta() {
        return $this->eta;
    }
}

// Istanziazione
$persona = new Persona("Mario", 30);

// Accesso a metodi e proprietà
echo $persona->saluta();
echo $persona->nome; // public
// echo $persona->eta; // ERRORE - private

// Ereditarietà
class Studente extends Persona {
    public $scuola;
    
    public function __construct($nome, $eta, $scuola) {
        parent::__construct($nome, $eta);
        $this->scuola = $scuola;
    }
}`
      },
      {
        titolo: "Variabili Superglobali",
        descrizione: "Uso delle variabili superglobali per gestire dati HTTP",
        codice: `<?php
// $_GET - dati da URL
// URL: pagina.php?nome=Mario&eta=30
$nome = $_GET['nome'] ?? 'Ospite'; // ?? operatore null coalescing
$eta = $_GET['eta'] ?? 0;

// $_POST - dati da form POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
}

// $_SESSION - dati persistenti
session_start();
$_SESSION['utente_id'] = 123;
$_SESSION['nome'] = 'Mario';

// Accesso in altre pagine
$utenteId = $_SESSION['utente_id'] ?? null;

// $_SERVER - informazioni sul server
$metodo = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];`
      },
      {
        titolo: "Namespace e Use",
        descrizione: "Organizzazione del codice con namespace",
        codice: `<?php
// File: App/Http/Controllers/UserController.php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use App\\Services\\EmailService;

class UserController {
    public function index() {
        $users = User::all();
        return $users;
    }
    
    public function sendEmail() {
        $emailService = new EmailService();
        $emailService->send();
    }
}

// File: App/Models/User.php
namespace App\\Models;

class User {
    // ...
}`
      },
      {
        titolo: "Metodi Statici",
        descrizione: "Definizione e uso di metodi statici",
        codice: `<?php
class Utility {
    public static function formattaData($data) {
        return date('d/m/Y', strtotime($data));
    }
    
    public static function generaToken() {
        return bin2hex(random_bytes(32));
    }
}

// Uso senza istanziare
$dataFormattata = Utility::formattaData('2024-01-15');
$token = Utility::generaToken();

// Esempio Laravel-style
class Route {
    public static function get($uri, $callback) {
        // Logica routing
    }
    
    public static function post($uri, $callback) {
        // Logica routing
    }
}

Route::get('/users', function() {
    return 'Lista utenti';
});`
      },
      {
        titolo: "Gestione Eccezioni",
        descrizione: "Uso di try/catch per gestire errori",
        codice: `<?php
// Gestione base
try {
    $risultato = 10 / 0; // Genera errore
} catch (Exception $e) {
    echo "Errore catturato: " . $e->getMessage();
}

// Esempio pratico - database
try {
    $pdo = new PDO("mysql:host=localhost;dbname=test", $user, $pass);
    $stmt = $pdo->query("SELECT * FROM users");
    $users = $stmt->fetchAll();
} catch (PDOException $e) {
    echo "Errore database: " . $e->getMessage();
    // Log dell'errore
    error_log($e->getMessage());
}

// Eccezioni personalizzate
class CustomException extends Exception {
    public function errorMessage() {
        return "Errore personalizzato: " . $this->getMessage();
    }
}

try {
    throw new CustomException("Qualcosa è andato storto");
} catch (CustomException $e) {
    echo $e->errorMessage();
}`
      }
    ]
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