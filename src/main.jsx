import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const isProduction = import.meta.env.PROD;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={isProduction ? "/portfolio" : "/"}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
