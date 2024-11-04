import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './Route.jsx'
import Navbar from "./componenets/Navbar.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Route />
  </StrictMode>,
)
