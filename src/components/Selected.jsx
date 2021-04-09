import React, { useContext, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import { Context } from '../context/Context'
import { DeleteBox } from './DeleteBox'

export const Selected = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { employees } = useContext(Context)
  const { id } = useParams()

  const selectedEmployee = employees.find(
    employee => employee.id === Number(id)
  )
  const { image, name, email, role, team, address, city } = selectedEmployee

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="pt-5">
      <div className="card custom-radius shadow p-4 bg-body rounded selected-card">
        <div className="badge position-absolute w-auto top-0 start-50 p-0 translate-middle">
          <img
            className="employee-list-img-lg"
            src={image}
            alt="employee"></img>
        </div>

        <div className="mt-5">
          <h5 className="name-lg text-center">{name}</h5>
          <h6 className="email text-center">{email}</h6>
          <div className="row d-flex justify-content-center">
            {isVisible ? (
              <DeleteBox id={id} toggleVisibility={toggleVisibility} />
            ) : (
              <RegularBox id={id} toggleVisibility={toggleVisibility} />
            )}
          </div>
          <div className="row p-2">
            <div className="col">
              <p className="card-title">Role</p>
              <p className="card-data">{role}</p>
            </div>
            <div className="col">
              <p className="card-title">Team</p>
              <p className="card-data">{team}</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <p className="card-title">Address</p>
              <p className="card-data">{address}</p>
            </div>
            <div className="col">
              <p className="card-title">City</p>
              <p className="card-data">{city}</p>
            </div>
          </div>
          <div className="row p-2">
            <button type="button" className="btn custom-btn custom-radius p-3">
              SHARE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const RegularBox = ({ id, toggleVisibility }) => {
  return (
    <div className="row p-2">
      <div className="col d-flex justify-content-end">
        <NavLink to={`/${id}/edit`}>
          <button
            type="button"
            className="btn btn-secondary rounded-circle"
            id="edit-btn">
            <i className="fas fa-pen"></i>
          </button>
        </NavLink>
      </div>
      <div className="col">
        <button
          onClick={toggleVisibility}
          type="button"
          className="btn btn-secondary rounded-circle"
          id="delete-btn">
          <i className="fas fa-times danger"></i>
        </button>
      </div>
    </div>
  )
}
