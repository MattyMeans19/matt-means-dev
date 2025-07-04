import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
