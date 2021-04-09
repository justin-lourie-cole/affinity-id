import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { addEmployee, getEmployees } from '../api/apiClient'
import { Context } from '../context/Context'

export const Create = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    email: '',
    role: '',
    team: '',
    address: ''
  })
  const { setEmployees } = useContext(Context)
  let history = useHistory()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    let id
    addEmployee(formData)
      .then(res => {
        id = res.id
        return getEmployees()
      })
      .then(res => setEmployees(res))
      .then(() => history.push(`/${id}`))
  }

  return (
    <form
      className="card custom-radius shadow p-5 mb-5 bg-body rounded"
      onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="image" className="form-label">
          Profile Image
        </label>
        <select
          className="form-select"
          name="image"
          value={formData.image}
          aria-label="Default select example"
          onChange={handleChange}>
          <option selected>Please select a profile image</option>
          <option value="./img/andy.png">Andy</option>
          <option value="./img/donna.png">Donna</option>
          <option value="./img/jack.png">Jack</option>
          <option value="./img/mary.png">Mary</option>
          <option value="./img/victoria.png">Victoria</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="name" className="form-label">
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
        <label for="email" className="form-label">
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
        <label for="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          name="role"
          value={formData.role}
          aria-label="Default select example"
          onChange={handleChange}>
          <option selected>Please select a role</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="team" className="form-label">
          Team
        </label>
        <select
          className="form-select"
          name="team"
          value={formData.team}
          aria-label="Default select example"
          onChange={handleChange}>
          <option selected>Please select a team</option>
          <option value="creative">Creative</option>
          <option value="management">Management</option>
          <option value="finance & admin">Finance & Admin</option>
          <option value="Spiritual Advisor">Spiritual Advisor</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="address" className="form-label">
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
        <label for="city" className="form-label">
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

      <button
        type="submit"
        className="btn btn-success custom-radius p-3"
        id="add-btn">
        ADD EMPLOYEE
      </button>
    </form>
  )
}
