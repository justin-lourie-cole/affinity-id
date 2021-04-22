import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export const Create = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  const history = useHistory()

  return (
    <form className="card" onSubmit={handleSubmit(onSubmit)}>
      <div className="badge position-absolute top-0 start-100 translate-middle">
        <button
          type="button"
          className="btn rounded-circle"
          id="back-btn"
          onClick={() => history.goBack()}>
          <i className="fas fa-times danger"></i>
        </button>
      </div>
      <div className="m-3">
        <label htmlFor="image" className="form-label">
          Profile Image
        </label>
        <select className="form-select" name="image" aria-label="select">
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
      <div className="mb-3 mx-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          name="name"
          aria-describedby="name"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-3 mx-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3 mx-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select className="form-select" name="role" aria-label="select">
          <option value="DEFAULT" disabled>
            Please select a role
          </option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
        </select>
      </div>
      <div className="mb-3 mx-3">
        <label htmlFor="team" className="form-label">
          Team
        </label>
        <select className="form-select" name="team" aria-label="select">
          <option value="DEFAULT" disabled>
            Please select a team
          </option>
          <option value="Creative">Creative</option>
          <option value="Management">Management</option>
          <option value="Finance & Admin">Finance & Admin</option>
        </select>
      </div>
      <div className="mb-3 mx-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          className="form-control"
          name="address"
          aria-describedby="address"
          placeholder="Enter Address"
        />
      </div>
      <div className="mb-3 mx-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          className="form-control"
          name="city"
          aria-describedby="city"
          placeholder="Enter City"
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
