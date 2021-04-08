import React, { useEffect, useState } from 'react'

import { getEmployees } from '../api/apiClient'

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees().then(res => {
      setEmployees(res)
      console.log(res)
    })
  }, [])

  return <div></div>
}
