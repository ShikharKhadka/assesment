import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CssBaseline } from '@mui/material'
import { ThemeDataProvider } from './state/theme/theme_provider.tsx'
import App from './App.tsx'



  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ThemeDataProvider>
        <CssBaseline />
        <App />
      </ThemeDataProvider>
    </StrictMode>
  );
