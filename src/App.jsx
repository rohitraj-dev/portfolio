import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

import Certifications from './pages/Certifications'
import Education from './pages/Education'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
