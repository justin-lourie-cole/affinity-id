import React, { createContext, useState, useEffect } from 'react'

import { fetchEmployees } from '../api/apiClient'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])
  const [params, setParams] = useState()

  useEffect(() => {
    fetchEmployees().then(res => {
      setEmployees(res)
    })
  }, [])

  return (
    <Context.Provider value={{ employees, setEmployees, params, setParams }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
