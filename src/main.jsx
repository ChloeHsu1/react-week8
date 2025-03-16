import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/all.scss'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
