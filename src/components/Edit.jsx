import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { updateEmployee, fetchEmployees } from '../api/apiClient'
import { EmployeeContext, IdContext } from '../context/Context'
import { findById, changeHandler } from '../utilities'

export const Edit = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    email: '',
    role: '',
    team: '',
    address: ''
  })

  const { employees, setEmployees } = useContext(EmployeeContext)
  const { params } = useContext(IdContext)
  const history = useHistory()
  const goBack = () => history.goBack()

  const { image, name, email, role, team, address, city } = findById(
    employees,
    params
  )

  useEffect(() => {
    setFormData({ image, name, email, role, team, address, city })
  }, [image, name, email, role, team, address, city])

  const handleChange = e => changeHandler(e, formData, setFormData)

  const handleSubmit = e => {
    e.preventDefault()
    let employeeId
    updateEmployee(params, formData)
      .then(res => {
        employeeId = res.id
        return fetchEmployees()
      })
      .then(res => setEmployees(res))
      .then(() => history.push(`/${employeeId}`))
  }

  return (
    <form
      className="card custom-radius shadow p-5 bg-body form-width"
      onSubmit={handleSubmit}>
      <div className="badge position-absolute w-auto top-0 start-100 p-0 translate-middle">
        <button
          type="button"
          className="btn rounded-circle"
          id="back-btn"
          onClick={goBack}>
          <i className="fas fa-times danger"></i>
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Profile Image
        </label>
        <select
          className="form-select"
          name="image"
          value={formData.image}
          aria-label="Default select example"
          onChange={handleChange}>
          <option value="./img/andy.png">Andy</option>
          <option value="./img/donna.png">Donna</option>
          <option value="./img/jack.png">Jack</option>
          <option value="./img/mary.png">Mary</option>
          <option value="./img/victoria.png">Victoria</option>
          <option value="./img/justin.png">Justin</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          aria-describedby="emailHelp"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          name="role"
          value={formData.role}
          aria-label="Default select example"
          onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="team" className="form-label">
          Team
        </label>
        <select
          className="form-select"
          name="team"
          value={formData.team}
          aria-label="Default select example"
          onChange={handleChange}>
          <option value="Creative">Creative</option>
          <option value="Finance & Admin">Finance & Admin</option>
          <option value="Management">Management</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          className="form-control"
          name="address"
          value={formData.address}
          aria-describedby="emailHelp"
          placeholder="Enter Address"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          className="form-control"
          name="city"
          value={formData.city}
          aria-describedby="emailHelp"
          placeholder="Enter City"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn custom-radius p-3" id="submit-btn">
        UPDATE EMPLOYEE
      </button>
    </form>
  )
}
