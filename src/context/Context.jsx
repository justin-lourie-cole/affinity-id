import React, { createContext, useState, useEffect } from 'react'

import { fetchEmployees } from '../api/apiClient'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees().then(res => {
      setEmployees(res)
    })
  }, [])

  return (
    <Context.Provider value={{ employees, setEmployees }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
