import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductContextProvider>
  </BrowserRouter>,
)
