import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import LanguageProvider from './i18n/LanguageProvider'
import { ENGLISH, loadMessages, storedLang } from './i18n/context'
import Home from './pages/Home'
import Documents from './pages/Documents'
import ConfigGuide from './pages/ConfigGuide'
import Tutorials from './pages/Tutorials'
import VividaPage from './pages/VividaPage'
import VividoPage from './pages/VividoPage'
import VvmuxPage from './pages/VvmuxPage'
import VvmuxPluginsPage from './pages/VvmuxPluginsPage'
import ViviPage from './pages/ViviPage'
import VvrdPage from './pages/VvrdPage'
import NotFound from './pages/NotFound'

// Load the saved language before the first paint, so a returning reader never
// sees a flash of English. A locale that fails to load falls back to English.
const lang = storedLang()
const initial = await loadMessages(lang).then((t) => ({ lang, t }), () => ENGLISH)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider initial={initial}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="docs" element={<Documents />} />
            <Route path="config" element={<ConfigGuide />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="vivida" element={<VividaPage />} />
            <Route path="vivido" element={<VividoPage />} />
            <Route path="vvmux" element={<VvmuxPage />} />
            <Route path="vvmux/plugins" element={<VvmuxPluginsPage />} />
            <Route path="vivi" element={<ViviPage />} />
            <Route path="vvrd" element={<VvrdPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
