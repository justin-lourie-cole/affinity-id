import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { EmployeeContext } from '../context/Context'
import { fetchEmployees } from '../api/apiClient'

export const Nav = () => {
  const [searchInput, setSearchInput] = useState('')

  const { employees, setEmployees } = useContext(EmployeeContext)

  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  // TODO this isn't working yet
  useEffect(() => {
    let regex = '/' + searchInput + '/g'
    if (searchInput.length) {
      setEmployees(employees.filter(employee => employee.name.match(regex)))
    } else {
      fetchEmployees().then(res => setEmployees(res))
    }
  }, [searchInput])

  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col d-flex justify-content-center align-items-center py-2 logo-margin">
          <div id="affinityid-logo">
            <img src="../img/affinityid-logo.svg" alt="affinityid-logo" />
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <NavLink to="/create">
            <button type="button" id="create-btn">
              CREATE A NEW EMPLOYEE
            </button>
          </NavLink>
        </div>
      </div>
      <div className="row d-flex align-items-center search-bar-justify">
        <div className="col-6 d-flex justify-content-center">
          <div className="pt-3">
            <input
              className="p-3"
              id="search-box"
              value={searchInput}
              onChange={handleChange}
              type="text"
              placeholder="Search:"
              aria-label=".form-control-lg example"></input>
          </div>
        </div>
      </div>
    </div>
  )
}
