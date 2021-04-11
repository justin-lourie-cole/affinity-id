import React, { createContext, useState, useEffect } from 'react'

import { fetchEmployees } from '../api/apiClient'

const EmployeeContext = createContext()
const IdContext = createContext()

const EmployeeContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees().then(res => {
      setEmployees(res)
    })
  }, [])

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  )
}

const IdContextProvider = ({ children }) => {
  const [params, setParams] = useState()

  return (
    <IdContext.Provider value={{ params, setParams }}>
      {children}
    </IdContext.Provider>
  )
}

export {
  EmployeeContext,
  EmployeeContextProvider,
  IdContext,
  IdContextProvider
}
