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
      className="card px-10 py-20 btn employee-list-card custom-radius shadow p-3 my-4 bg-body rounded"
      onClick={handleEmployeeClick}>
      <div className="row">
        <div className="col-3 list-img-wrapper">
          <img className="employee-list-img" src={image} alt="employee"></img>
        </div>

        <div className="col">
          <h4 className="name text-start mb-0 mt-1">{name}</h4>
          <h5 className="role text-start mb-1">{role}</h5>
          <h6 className="team text-start mb-1">{team}</h6>
        </div>
      </div>
    </div>
  )
}
