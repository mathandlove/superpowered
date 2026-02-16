import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import TalkSlide from './components/TalkSlide'
import TalkPage from './components/TalkPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/talk" element={<TalkPage />} />
        <Route path="/talk-slide" element={<TalkSlide />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
