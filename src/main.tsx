import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { clientatheme } from './theme/theme.ts'
import { RouterProvider } from 'react-router'
import { routerProvider } from './router/router.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={clientatheme}>
      <CssBaseline />
      <RouterProvider router={routerProvider} />
    </ThemeProvider>
  </StrictMode>,
)
