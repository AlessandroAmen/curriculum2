export const sistemaGestionaleData = {
  id: 4,
  title: "Sistema Gestionale Web",
  slug: "sistema-gestionale",
  description: "Applicazione fullstack per la gestione di dati aziendali con dashboard amministrativa",
  technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
  category: "fullstack",
  image: "/fotolinkedin.jpg",
  frontendLink: "#",
  backendLink: "#",
  liveLink: null,
  features: [
    "Autenticazione utenti",
    "CRUD operations",
    "Dashboard amministrativa",
    "API RESTful"
  ],
  detailedDescription: `Sistema web per la gestione aziendale sviluppato con Laravel, che include funzionalità complete di CRUD, autenticazione e pannello amministrativo.`,
  objective: "Sviluppare competenze fullstack con Laravel",
  
  screenshots: [
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Dashboard amministrativa",
      alt: "Admin dashboard"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Gestione utenti con tabella paginata",
      alt: "User management"
    }
  ],
  
  videos: [
    {
      url: "#",
      title: "Demo sistema gestionale",
      description: "Panoramica delle funzionalità di gestione e amministrazione"
    }
  ],
  
  codeSnippets: [
    {
      title: "Laravel Controller Example",
      language: "php",
      code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Product;
use Illuminate\\Http\\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(10);
        return view('products.index', compact('products'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'required'
        ]);

        Product::create($validated);
        return redirect()->route('products.index')
                         ->with('success', 'Product created successfully');
    }
}`
    },
    {
      title: "Middleware di Autenticazione",
      language: "php",
      code: `<?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->route('login')
                           ->with('error', 'Devi effettuare il login');
        }

        if (!Auth::user()->isAdmin()) {
            abort(403, 'Accesso non autorizzato');
        }

        return $next($request);
    }
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