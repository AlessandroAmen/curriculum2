import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Contatti from './pages/contatti.jsx';
import Curriculum from './pages/curriculum.jsx';
import Skill from './pages/skill.jsx';
import Portfolio from './pages/portfolio.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import SkillDetail from './pages/SkillDetail.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/contattami" element={<Contatti />} />
      <Route path="/pages/curriculum" element={<Curriculum />} />
      <Route path="/pages/skill" element={<Skill />} />
      <Route path="/pages/portfolio" element={<Portfolio />} />
      <Route path="/pages/portfolio/:slug" element={<ProjectDetail />} />
      <Route path="/pages/skill/:nome" element={<SkillDetail />} /> 
    </Routes>
  );
}

export default AppRoutes;