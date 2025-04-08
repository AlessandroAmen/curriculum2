import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Contatti from './pages/contatti.jsx';
import Curriculum from './pages/curriculum.jsx';
import Skill from './pages/skill.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/contattami" element={<Contatti />} />
      <Route path="/pages/curriculum" element={<Curriculum />} />
      <Route path="/pages/skill" element={<Skill />} />
    </Routes>
  );
}

export default AppRoutes;