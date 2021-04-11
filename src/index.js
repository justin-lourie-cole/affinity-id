import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { EmployeeContextProvider, IdContextProvider } from './context/Context'

import './index.css'
import App from './App'

ReactDOM.render(
  <EmployeeContextProvider>
    <IdContextProvider>
      <Router>
        <App />
      </Router>
    </IdContextProvider>
  </EmployeeContextProvider>,
  document.getElementById('root')
)
