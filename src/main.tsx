import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
