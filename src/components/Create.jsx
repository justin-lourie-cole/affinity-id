import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { addEmployee, fetchEmployees } from '../api/apiClient'
import { EmployeeContext } from '../context/Context'
import { changeHandler } from '../utilities'

export const Create = () => {
  const [formData, setFormData] = useState({
    image: './img/andy.png',
    name: '',
    email: '',
    role: 'Admin',
    team: 'Creative',
    address: ''
  })
  const { setEmployees } = useContext(EmployeeContext)
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    let employeeId
    addEmployee(formData)
      .then(res => {
        employeeId = res.id
        return fetchEmployees()
      })
      .then(res => setEmployees(res))
      .then(() => history.push(`/${employeeId}`))
  }

  return (
    <form
      className="card custom-radius shadow p-5 bg-body rounded form-width"
      onSubmit={handleSubmit}>
      <div className="badge position-absolute w-auto top-0 start-100 p-0 translate-middle">
        <button
          type="button"
          className="btn rounded-circle"
          id="back-btn"
          onClick={() => history.goBack()}>
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
          onChange={e => changeHandler(e, formData, setFormData)}>
          <option value="DEFAULT" disabled>
            Please select a profile image
          </option>
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
          onChange={e => changeHandler(e, formData, setFormData)}
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
          onChange={e => changeHandler(e, formData, setFormData)}
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
          onChange={e => changeHandler(e, formData, setFormData)}>
          <option value="DEFAULT" disabled>
            Please select a role
          </option>
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
          onChange={e => changeHandler(e, formData, setFormData)}>
          <option value="DEFAULT" disabled>
            Please select a team
          </option>
          <option value="Creative">Creative</option>
          <option value="Management">Management</option>
          <option value="Finance & Admin">Finance & Admin</option>
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
          onChange={e => changeHandler(e, formData, setFormData)}
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
          onChange={e => changeHandler(e, formData, setFormData)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-success custom-radius p-3"
        id="add-btn">
        ADD EMPLOYEE
      </button>
    </form>
  )
}
