import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { updateEmployee, getEmployees } from '../api/apiClient'
import { Context } from '../context/Context'

export const Edit = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    email: '',
    role: '',
    team: '',
    address: ''
  })

  const { employees, setEmployees } = useContext(Context)
  const { id } = useParams()
  let history = useHistory()

  const selectedEmployee = employees.find(
    employee => employee.id === Number(id)
  )
  const { image, name, email, role, team, address, city } = selectedEmployee

  useEffect(() => {
    setFormData({ image, name, email, role, team, address, city })
  }, [image, name, email, role, team, address, city])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateEmployee(id, formData)
      .then(() => {
        return getEmployees()
      })
      .then(res => setEmployees(res))
      .then(() => history.push(`/${id}`))
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <form
      className="card custom-radius shadow p-5 mb-5 bg-body rounded"
      onSubmit={handleSubmit}>
      <div className="badge position-absolute w-auto top-0 start-100 p-0 translate-middle">
        <button
          type="button"
          class="btn rounded-circle"
          id="back-btn"
          onClick={goBack}>
          <i className="fas fa-times danger"></i>
        </button>
      </div>
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
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
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
          <option value="Creative">Creative</option>
          <option value="Finance & Admin">Finance & Admin</option>
          <option value="Management">Management</option>
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

      <button type="submit" className="btn custom-radius p-3" id="submit-btn">
        UPDATE EMPLOYEE
      </button>
    </form>
  )
}
