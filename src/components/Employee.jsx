import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Context } from '../context/Context'

export const Employee = ({ id }) => {
  const { employees } = useContext(Context)
  const selectedEmployee = employees.find(
    employee => employee.id === Number(id)
  )

  let history = useHistory()

  const handleEmployeeClick = () => {
    history.push(`/${id}`)
  }

  return (
    <div>
      {selectedEmployee && (
        <div
          className="card btn employee-list-card custom-radius shadow p-3 mb-4 bg-body rounded"
          onClick={handleEmployeeClick}>
          <div className="row">
            <div className="col-3 list-img-wrapper">
              <img
                className="employee-list-img"
                src={selectedEmployee.image}
                alt="employee"></img>
            </div>

            <div className="col">
              <h4 className="name text-start mb-0 mt-1">
                {selectedEmployee.name}
              </h4>
              <h5 className="role text-start mb-1">{selectedEmployee.role}</h5>
              <h6 className="team text-start mb-1">{selectedEmployee.team}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
