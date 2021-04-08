import React, { useContext } from 'react'

import { Context } from '../context/Context'
import { Employee } from './index'

export const EmployeeList = () => {
  const { employees } = useContext(Context)

  return (
    <div>
      {employees && (
        <div>
          {employees.map(employee => (
            <Employee key={employee.id} {...employee} />
          ))}
        </div>
      )}
    </div>
  )
}
