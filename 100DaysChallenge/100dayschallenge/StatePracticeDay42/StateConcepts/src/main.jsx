import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'reac'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
