import React, { createContext, useState, useEffect } from 'react'

import { getEmployees } from '../api/apiClient'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees().then(res => {
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
