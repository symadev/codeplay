import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Routes'
import AuthProvider from './Provider/AuthContext'
import { UIProvider } from './Provider/UIContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UIProvider>
      <AuthProvider>
      
    <RouterProvider router={router} />
     <ToastContainer position="top-center" autoClose={2000} />
   </AuthProvider>
   </UIProvider>
  </StrictMode>,
)
