import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Context } from '../context/Context'

export const Selected = () => {
  const { employees } = useContext(Context)
  const { id } = useParams()
  console.log(employees)

  const selectedEmployee = employees.find(
    employee => employee.id === Number(id)
  )

  return (
    <div className="card custom-radius shadow p-4 bg-body rounded">
      <img
        className="employee-list-img-lg"
        src={selectedEmployee.image}
        alt="employee"></img>

      <h5 className="name-lg text-start">{selectedEmployee.name}</h5>
      <h6 className="email text-start">{selectedEmployee.email}</h6>
      <div className="row">
        <div className="col">
          <i className="fas fa-pen"></i>
        </div>
        <div className="col">
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="card-title">Role</p>
          <p className="card-data">{selectedEmployee.role}</p>
        </div>
        <div className="col">
          <p className="card-title">Team</p>
          <p className="card-data">{selectedEmployee.team}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="card-title">Address</p>
          <p className="card-data">{selectedEmployee.address}</p>
        </div>
        <div className="col">
          <p className="card-title">City</p>
          <p className="card-data">{selectedEmployee.city}</p>
        </div>
      </div>
      <button type="button" className="btn custom-btn custom-radius p-3">
        SHARE
      </button>
    </div>
  )
}
