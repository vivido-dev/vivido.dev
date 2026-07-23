import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Documents from './pages/Documents'
import ConfigGuide from './pages/ConfigGuide'
import Tutorials from './pages/Tutorials'
import VividoPage from './pages/VividoPage'
import VvmuxPage from './pages/VvmuxPage'
import ViviPage from './pages/ViviPage'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Documents />} />
          <Route path="config" element={<ConfigGuide />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="vivido" element={<VividoPage />} />
          <Route path="vvmux" element={<VvmuxPage />} />
          <Route path="vivi" element={<ViviPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
