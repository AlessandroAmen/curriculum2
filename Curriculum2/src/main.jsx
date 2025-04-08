import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import AppRoutes from './routes.jsx';
import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)