export const sistemaGestionaleData = {
  id: 4,
  title: "Sistema Gestionale Web",
  slug: "sistema-gestionale",
  description: "Applicazione backend per la gestione di dati aziendali con dashboard amministrativa",
  technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
  category: "backend",
  image: "/laravel/Screenshot 2025-09-21 alle 19.20.18.png",
  frontendLink: null,
  backendLink: "https://github.com/AlessandroAmen/laravel",
  liveLink: null,
  features: [
    "Autenticazione utenti",
    "CRUD operations",
    "Dashboard amministrativa",
    "API RESTful"
  ],
  detailedDescription: `Sistema web per la gestione aziendale sviluppato con Laravel, che include funzionalità complete di CRUD, autenticazione e pannello amministrativo.`,
  objective: "Sviluppare competenze backend con Laravel",
  
  screenshots: [],
  
  videos: [
    {
  url: "https://www.linkedin.com/posts/alessandro-amenta-940227354_forumweb-con-autenticazione-utente-e-gestione-activity-7323319441612521472-j37T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFhPboAB6xJVY-c4VtT0h8n_QrClQxyVDIU",
      title: "Demo breve su LinkedIn",
      description: "Video demo del progetto breve per studio Laravel."
    }
  ],
  
  codeSnippets: [
  {
    title: "Middleware: CheckLoggedIn",
    language: "php",
    code: `<?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Session;

class CheckLoggedIn
{
  /**
   * Handle an incoming request.
   *
   * @param  \\Illuminate\\Http\\Request  $request
   * @param  \\Closure  $next
   * @return mixed
   */
  public function handle(Request $request, Closure $next)
  {
    // Controlla se l'utente è loggato
    if (!Session::has('user')) {
      // Reindirizza alla pagina di login con un messaggio di errore
      return redirect('/login')->with('error', 'Devi essere loggato per accedere a questa pagina.');
    }

    // L'utente è loggato, procedi
    return $next($request);
  }
}`
  },
  {
    title: "Controller: Gestione Post Forum",
    language: "php",
    code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;
use Illuminate\\Routing\\Controller as BaseController;

class PostController extends BaseController
{
  // Mostra la homepage con i post
  public function index()
  {
    // Recupera tutti i post con i dati dell'utente associato
    $posts = Post::with('user')->orderBy('created_at', 'desc')->get();
    return view('homepage', compact('posts'));
  }

  // Salva un nuovo post
  public function store(Request $request)
  {
    // Validazione dei dati
    $request->validate([
      'title' => 'required|string|max:255',
      'content' => 'required|string',
    ]);

    // Creazione del post
    Post::create([
      'user_id' => Auth::id(),
      'title' => $request->title,
      'content' => $request->content,
    ]);

    return redirect('/')->with('success', 'Post pubblicato con successo!');
  }
}`
  },
  {
    title: "Relazioni Eloquent: User & Post",
    language: "php",
    code: `<?php
// app/Models/User.php
public function posts()
{
  return $this->hasMany(Post::class);
}

<?php
// app/Models/Post.php
public function user()
{
  return $this->belongsTo(User::class);
}`
  }
  ],
  
  challenges: [
    "Architettura MVC con Laravel",
    "Sicurezza e validazione dati",
    "Ottimizzazione query database",
    "Gestione permessi e ruoli utente"
  ],
  
  learnings: [
    "Laravel framework",
    "Eloquent ORM",
    "Blade templating",
    "API development",
    "Middleware e autenticazione",
    "Database design e migrazioni"
  ]
};