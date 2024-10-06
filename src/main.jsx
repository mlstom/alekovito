import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StateContext>
    <Toaster  />
    <App />
  </StateContext>,
)
