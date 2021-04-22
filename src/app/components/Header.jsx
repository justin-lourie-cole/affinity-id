import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col d-flex justify-content-center align-items-center">
          <div id="affinityid-logo">
            <img
              src={window.location.origin + '/img/affinityid-logo.svg'}
              alt="affinityid-logo"
            />
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <NavLink to="/create">
            <button type="button" id="create-btn">
              CREATE A NEW EMPLOYEE
            </button>
          </NavLink>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col d-flex" id="search-wrapper">
          <input
            // className="d-flex"
            id="search-box"
            type="text"
            placeholder="Search:"
            aria-label=".form-control-lg example"></input>
        </div>
      </div>
    </>
  )
}
