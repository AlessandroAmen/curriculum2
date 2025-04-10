import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store/store.js'; 
import './index.css';
import AppRoutes from './routes.jsx';
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);