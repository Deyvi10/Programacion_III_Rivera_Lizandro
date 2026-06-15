import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloReact from './HelloReact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloReact/>
  </StrictMode>,
)