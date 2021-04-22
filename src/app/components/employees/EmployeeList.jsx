import React from 'react'
import { useSelector } from 'react-redux'

import { Employee } from './EmployeeListItem'

export const EmployeeList = () => {
  const { employees, status } = useSelector(state => state.employees)

  return (
    <div className="container">
      <div className="row px-4 mb-2 mt-3">
        <div className="col-6">
          <h5 className="catagory-title">Admin</h5>
        </div>
        <div className="col-6">
          <h5 className="catagory-title-right">
            Sort by: <span>A to Z</span>
          </h5>
        </div>
      </div>
      <div>
        {status === 'success' &&
          employees.map(({ id, ...props }) => <Employee key={id} {...props} />)}
      </div>
      <div className="row px-4 mb-2 mt-5">
        <h5 className="catagory-title">Employee</h5>
      </div>
    </div>
  )
}
