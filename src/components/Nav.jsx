import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { SearchContext } from '../context/Context'

export const Nav = () => {
  const { query, setQuery } = useContext(SearchContext)

  const handleChange = e => {
    setQuery(e.target.value)
  }

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
              value={query}
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
