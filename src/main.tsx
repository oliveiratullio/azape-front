import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ResetStyle from './styles/ResetStyle.tsx'
import GlobalStyle from './styles/GlobalStyle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
