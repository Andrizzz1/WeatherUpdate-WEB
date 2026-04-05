import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/nav'
import './index.css'
import Web from './web'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Web />
  </StrictMode>,
)
