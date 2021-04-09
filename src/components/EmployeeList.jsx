import React, { useContext, useState, useEffect } from 'react'

import { Context } from '../context/Context'
import { Employee } from './index'

export const EmployeeList = () => {
  const [admins, setAdmins] = useState([])
  const [workers, setWorkers] = useState([])

  const { employees } = useContext(Context)

  useEffect(() => {
    setAdmins(employees.filter(employee => employee.role === 'Admin'))
    setWorkers(employees.filter(employee => employee.role === 'Employee'))
  }, [employees])

  return (
    <div>
      <div className="row px-4 mb-2 mt-3">
        <div className="col-6">
          <h5 className="catagory-title">Admin</h5>
        </div>
        <div className="col-6">
          <h5 className="catagory-title">
            Sort by:{' '}
            <span>
              <b>newest</b>
            </span>
          </h5>
        </div>
      </div>
      <div>
        {admins.length > 0 && (
          <div>
            {admins.map(employee => (
              <Employee key={employee.id} {...employee} />
            ))}
          </div>
        )}
      </div>
      <div className="row px-4 mb-2 mt-5">
        <h5 className="catagory-title">Employee</h5>
      </div>
      <div>
        {workers.length > 0 && (
          <div>
            {workers.map(employee => (
              <Employee key={employee.id} {...employee} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
