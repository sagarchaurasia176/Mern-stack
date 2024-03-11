import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';
// import { Store } from './Store/Redux.js'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    {/* redux tool kit here apply */}
      {/* <Provider store={Store}> */}
        <App />
        <ToastContainer/>
      {/* </Provider> */}
    </BrowserRouter>

    {/* <toast/> */}

  </React.StrictMode>,
)
