import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { storeDataPass } from './Data/Redux/Toolkit.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* redux concpets apply here */}
    <Provider store={storeDataPass}>
    <App />
    </Provider>
  </React.StrictMode>,
)
