import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './components/Home/App.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Prebuilds from './components/Prebuilds/Prebuilds.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/matt-means-dev'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="templates" element={<Prebuilds />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
