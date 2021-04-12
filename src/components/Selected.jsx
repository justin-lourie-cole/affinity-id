import React, { useContext, useState, useEffect } from 'react'
import copy from 'copy-to-clipboard'

import { EmployeeContext, IdContext } from '../context/Context'
import { DeleteBox } from './DeleteBox'
import { findById } from '../utilities'

export const Selected = () => {
  const [selectedEmployee, setSelectedEmployee] = useState({})
  const { employees } = useContext(EmployeeContext)
  const { params } = useContext(IdContext)

  useEffect(() => {
    setSelectedEmployee(findById(employees, params))
  }, [selectedEmployee, params, employees])

  const copyToClipboard = ({ email }) => {
    copy(email)
    alert(`You have copied "${email}"`)
  }

  return (
    <div>
      {selectedEmployee && (
        <div className="pt-5">
          <div className="card custom-radius shadow p-4 pb-2 bg-body rounded selected-card">
            <div className="badge position-absolute w-auto top-0 start-50 p-0 translate-middle">
              <img
                className="employee-list-img-lg"
                src={selectedEmployee.image}
                alt="employee"></img>
            </div>

            <div className="mt-5">
              <h5 className="name-lg text-center">{selectedEmployee.name}</h5>
              <h6 className="email text-center">{selectedEmployee.email}</h6>
              <div className="row d-flex justify-content-center">
                <DeleteBox id={params} />
              </div>
              <div className="row p-2">
                <div className="col">
                  <p className="card-title">Role</p>
                  <p className="card-data">{selectedEmployee.role}</p>
                </div>
                <div className="col">
                  <p className="card-title">Team</p>
                  <p className="card-data">{selectedEmployee.team}</p>
                </div>
              </div>
              <div className="row p-2">
                <div className="col">
                  <p className="card-title">Address</p>
                  <p className="card-data">{selectedEmployee.address}</p>
                </div>
                <div className="col">
                  <p className="card-title">City</p>
                  <p className="card-data">{selectedEmployee.city}</p>
                </div>
              </div>
              <div className="row p-2">
                <button
                  onClick={() => copyToClipboard(selectedEmployee)}
                  type="button"
                  className="btn custom-btn custom-radius p-3">
                  SHARE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
