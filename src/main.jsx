import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PantryApp } from './PantryApp.jsx'
import { store } from './store'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PantryApp />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
