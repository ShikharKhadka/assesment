import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { clientatheme } from './theme/theme.ts'
import { RouterProvider } from 'react-router'
import { routerProvider } from './router/router.ts'
import { TransactionProvider } from './state/cart/cart_context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={clientatheme}>
      <TransactionProvider>
        <CssBaseline />
        <RouterProvider router={routerProvider} />
      </TransactionProvider>
    </ThemeProvider>
  </StrictMode>,
)
