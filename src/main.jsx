import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Files/Navbar'
import Main from './Files/main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Main />

  </React.StrictMode>
)
