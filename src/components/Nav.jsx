import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="container">
      <div className="row px-4">
        <div className="col">
          <div className="container px-4 pb-2">
            <img src="../img/affinityid-logo.svg" alt="affinityid-logo" />
          </div>
          <div className="container py-3">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Search:"
              aria-label=".form-control-lg example"></input>
          </div>
        </div>
        <div className="col px-5">
          <div className="d-grid gap-2">
            <NavLink to="/create">
              <button type="button" className="btn btn-dark custom-radius p-3">
                CREATE A NEW EMPLOYEE
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
