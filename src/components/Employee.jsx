import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Context } from '../context/Context'

export const Employee = ({ id }) => {
  const { employees } = useContext(Context)
  const selectedEmployee = employees.find(
    employee => employee.id === Number(id)
  )
  const { image, name, role, team } = selectedEmployee

  let history = useHistory()

  const handleEmployeeClick = () => {
    history.push(`/${id}`)
  }

  return (
    <div
      className="card px-10 py-20 btn employee-list-card custom-radius shadow p-3 mb-5 bg-body rounded"
      onClick={handleEmployeeClick}>
      <div className="row">
        <div className="col-3 list-img-wrapper">
          <img className="employee-list-img" src={image} alt="employee"></img>
        </div>

        <div className="col">
          <h5 className="name text-start">{name}</h5>
          <h6 className="role text-start">{role}</h6>
          <h6 className="team text-start">{team}</h6>
        </div>
      </div>
    </div>
  )
}
