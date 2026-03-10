import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App'
import TalkSlide from './components/TalkSlide'
import TalkPage from './components/TalkPage'
import PresenterView from './components/PresenterView'
import TeacherFormPage from './components/TeacherFormPage'

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/talk" element={<TalkPage />} />
        <Route path="/talk-slide" element={<TalkSlide />} />
        <Route path="/talk/present" element={<PresenterView />} />
        <Route path="/teachers" element={<TeacherFormPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
