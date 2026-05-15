import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import AppRouter from './routes/AppRouter'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <Toaster position="top-right" />

      <AppRouter />

    </QueryClientProvider>

  </React.StrictMode>
)