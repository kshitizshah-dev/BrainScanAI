import { StrictMode } from 'react'
import './index.css'
import Router from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}/>
    </AuthProvider>
  </React.StrictMode>
)


