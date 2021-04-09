import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="container">
      <div className="row px-4">
        <div className="col">
          <div id="affinityid-logo">
            <img src="../img/affinityid-logo.svg" alt="affinityid-logo" />
          </div>
          <div className="container py-3">
            <input
              id="search-box"
              type="text"
              placeholder="Search:"
              aria-label=".form-control-lg example"></input>
          </div>
        </div>
        <div className="col">
          <div className="d-grid gap-2">
            <NavLink to="/create">
              <button
                type="button"
                // className="btn btn-dark custom-radius p-3"
                id="create-btn">
                CREATE A NEW EMPLOYEE
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
