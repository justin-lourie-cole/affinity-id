import React, { useContext, useState, useEffect } from 'react'

import { EmployeeContext, SearchContext } from '../context/Context'
import { Employee } from './index'
import { filterByRole, sortAtoZ, sortZtoA } from '../utilities'

export const EmployeeList = () => {
  const [descending, setDescending] = useState(true)
  const [order, setOrder] = useState([])

  const { employees } = useContext(EmployeeContext)
  const { query } = useContext(SearchContext)

  useEffect(() => {
    descending
      ? setOrder(sortAtoZ(employees, 'name'))
      : setOrder(sortZtoA(employees, 'name'))
  }, [descending, employees])

  useEffect(() => {
    setOrder(
      employees.filter(employee =>
        employee.name.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [query, descending, employees])

  return (
    <div>
      <div className="row px-4 mb-2 mt-3">
        <div className="col-6">
          <h5 className="catagory-title">Admin</h5>
        </div>
        <div className="col-6">
          <h5 className="catagory-title-right">
            Sort by:{' '}
            {descending ? (
              <span onClick={() => setDescending(!descending)}>A to Z</span>
            ) : (
              <span onClick={() => setDescending(!descending)}>Z to A</span>
            )}
          </h5>
        </div>
      </div>
      <div>
        {order && (
          <div>
            {filterByRole(order, 'Admin').map(employee => (
              <Employee key={employee.id} {...employee} />
            ))}
          </div>
        )}
      </div>
      <div className="row px-4 mb-2 mt-5">
        <h5 className="catagory-title">Employee</h5>
      </div>
      <div>
        {order && (
          <div>
            {filterByRole(order, 'Employee').map(employee => (
              <Employee key={employee.id} {...employee} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
