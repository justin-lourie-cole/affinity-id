import React, { createContext, useState } from 'react'

const EmployeeContext = createContext()
const IdContext = createContext()
const SearchContext = createContext()

const EmployeeContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([])

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

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export {
  EmployeeContext,
  EmployeeContextProvider,
  IdContext,
  IdContextProvider,
  SearchContext,
  SearchContextProvider
}
