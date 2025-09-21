export const budgetMealData = {
  id: 2,
  title: "BudgetMeal - Gestione Spesa e Pasti",
  slug: "budget-meal",
  description: "Applicazione web per la pianificazione dei pasti e il controllo del budget alimentare con deploy live",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Context"],
  category: "frontend",
  image: "/Budget Meal/sfonfo Budget Meal.png",
  frontendLink: "https://github.com/AlessandroAmen/budget-meal-app",
  backendLink: null,
  liveLink: "https://budget-meal-app.vercel.app/",
  features: [
    "Calcolo dinamico costi ricette e pasti",
    "Pianificazione pasti settimanale",
    "Import/export dati in JSON",
    "UI responsive con animazioni",
    "Gestione stato con React Context"
  ],
  detailedDescription: `Applicazione web completa sviluppata per risolvere il problema comune del calcolo preciso del costo dei pasti giornalieri. L'obiettivo principale è stato creare un'esperienza utente fluida e intuitiva, dove ogni componente - dal calcolatore dinamico al calendario interattivo - è progettato per rendere il monitoraggio del budget alimentare semplice e piacevole.`,
  objective: "Creare una soluzione frontend completa, reattiva e incentrata sull'utente per la gestione del budget alimentare",
  
  screenshots: [
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Dashboard principale con panoramica budget",
      alt: "Main dashboard"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Calcolatore ingredienti con prezzo al kg",
      alt: "Ingredient calculator"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Calendario pianificazione pasti settimanale",
      alt: "Weekly meal planner"
    },
    { 
      url: "/fotolinkedin.jpg", 
      caption: "Gestione ricette con calcolo costi automatico",
      alt: "Recipe management"
    }
  ],
  
  codeSnippets: [
    {
      title: "Custom Hook per localStorage - TypeScript",
      language: "typescript",
      code: `import { useState, useEffect } from 'react';

type LocalStorageHook<T> = [T, (value: T) => void];

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): LocalStorageHook<T> {
  // Stato per memorizzare il valore
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Ottieni dall'localStorage locale
      const item = window.localStorage.getItem(key);
      // Parsa il JSON memorizzato o ritorna il valore iniziale
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se errore anche, ritorna il valore iniziale
      console.log(error);
      return initialValue;
    }
  });

  // Restituisce una versione wrapped della funzione useState setter
  // che persiste il nuovo valore nel localStorage
  const setValue = (value: T) => {
    try {
      // Permette anche di passare una funzione come in useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // Salva nel localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}`
    },
    {
      title: "React Context per State Management",
      language: "typescript",
      code: `import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipi per ingredienti e pasti
interface Ingredient {
  id: string;
  name: string;
  pricePerKg: number;
  category: string;
}

interface Meal {
  id: string;
  name: string;
  ingredients: Array<{
    ingredientId: string;
    grams: number;
  }>;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  date: string;
}

// State e Actions
type State = {
  ingredients: Ingredient[];
  meals: Meal[];
  selectedDate: Date;
};

type Action =
  | { type: 'ADD_INGREDIENT'; payload: Ingredient }
  | { type: 'UPDATE_INGREDIENT'; payload: Ingredient }
  | { type: 'DELETE_INGREDIENT'; payload: string }
  | { type: 'ADD_MEAL'; payload: Meal }
  | { type: 'SET_DATE'; payload: Date };

// Reducer
const budgetReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case 'UPDATE_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.map(ing =>
          ing.id === action.payload.id ? action.payload : ing
        )
      };
    case 'DELETE_INGREDIENT':
      return {
        ...state,
        ingredients: state.ingredients.filter(ing => ing.id !== action.payload)
      };
    case 'ADD_MEAL':
      return {
        ...state,
        meals: [...state.meals, action.payload]
      };
    case 'SET_DATE':
      return {
        ...state,
        selectedDate: action.payload
      };
    default:
      return state;
  }
};

// Context
const BudgetContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// Provider
export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, {
    ingredients: [],
    meals: [],
    selectedDate: new Date()
  });

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

// Hook personalizzato
export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};`
    },
    {
      title: "Componente Calcolo Costo Pasto - Next.js",
      language: "typescript",
      code: `import React, { useState, useMemo } from 'react';
import { useBudget } from '../context/BudgetContext';

interface MealCostCalculatorProps {
  mealIngredients: Array<{
    ingredientId: string;
    grams: number;
  }>;
}

const MealCostCalculator: React.FC<MealCostCalculatorProps> = ({ 
  mealIngredients 
}) => {
  const { state } = useBudget();

  // Calcolo dinamico del costo totale del pasto
  const totalCost = useMemo(() => {
    return mealIngredients.reduce((total, mealIng) => {
      const ingredient = state.ingredients.find(ing => ing.id === mealIng.ingredientId);
      if (!ingredient) return total;
      
      // Calcola costo: (prezzo al kg / 1000g) * grammi utilizzati
      const costPerGram = ingredient.pricePerKg / 1000;
      const ingredientCost = costPerGram * mealIng.grams;
      
      return total + ingredientCost;
    }, 0);
  }, [mealIngredients, state.ingredients]);

  // Breakdown dettagliato per ingrediente
  const ingredientBreakdown = useMemo(() => {
    return mealIngredients.map(mealIng => {
      const ingredient = state.ingredients.find(ing => ing.id === mealIng.ingredientId);
      if (!ingredient) return null;
      
      const costPerGram = ingredient.pricePerKg / 1000;
      const cost = costPerGram * mealIng.grams;
      
      return {
        name: ingredient.name,
        grams: mealIng.grams,
        cost: cost,
        pricePerKg: ingredient.pricePerKg
      };
    }).filter(Boolean);
  }, [mealIngredients, state.ingredients]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Calcolo Costo Pasto
      </h3>
      
      {/* Breakdown ingredienti */}
      <div className="space-y-2 mb-4">
        {ingredientBreakdown.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div>
              <span className="font-medium text-gray-700">{item?.name}</span>
              <span className="text-sm text-gray-500 ml-2">
                ({item?.grams}g)
              </span>
            </div>
            <span className="font-semibold text-green-600">
              €{item?.cost.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      
      {/* Totale */}
      <div className="border-t-2 border-gray-200 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            Costo Totale:
          </span>
          <span className="text-2xl font-bold text-green-600">
            €{totalCost.toFixed(2)}
          </span>
        </div>
      </div>
      
      {/* Info aggiuntive */}
      <div className="mt-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          💡 Il calcolo è basato sul prezzo al kg degli ingredienti
          e sui grammi effettivamente utilizzati nel pasto.
        </p>
      </div>
    </div>
  );
};

export default MealCostCalculator;`
    }
  ],
  
  challenges: [
    "Gestione state complesso con TypeScript",
    "Performance con calcoli dinamici in tempo reale",
    "UX fluida per inserimento dati ingredienti",
    "Persistenza dati localStorage senza backend",
    "Design responsive con Tailwind CSS"
  ],
  
  learnings: [
    "Next.js e deployment con Vercel",
    "TypeScript avanzato con React",
    "React Context API per state management",
    "Custom hooks per localStorage",
    "Tailwind CSS per UI moderne",
    "Architettura frontend scalabile"
  ]
};