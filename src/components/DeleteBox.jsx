import React, { useContext, useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'

import { deleteEmployee, fetchEmployees } from '../api/apiClient'
import { Context } from '../context/Context'

export const DeleteBox = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false)

  const { setEmployees } = useContext(Context)
  const history = useHistory()
  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleDelete = () => {
    deleteEmployee(id)
      .then(() => history.push('/'))
      .then(() => fetchEmployees())
      .then(res => setEmployees(res))
  }

  return (
    <div>
      {isVisible ? (
        <div className="row p-2 showDeleteBox">
          <div className="col-4 d-flex align-items-center">
            <h6 className="are-you-sure">Are you sure?</h6>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button
              type="button"
              className="btn rounded-circle btn-delete"
              id="edit-btn">
              <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="col-2">
            <button className="btn rounded-circle btn-delete" id="delete-btn">
              <i className="fas fa-times danger"></i>
            </button>
          </div>
          <div className="col-2 d-flex align-items-center">
            <h5 onClick={handleDelete} className="delete-yes-no">
              YES
            </h5>
          </div>
          <div className="col-2 d-flex align-items-center">
            <h5 onClick={toggleVisibility} className="delete-yes-no">
              NO
            </h5>
          </div>
        </div>
      ) : (
        <div className="row p-2">
          <div className="col d-flex justify-content-end">
            <NavLink to={`/${id}/edit`}>
              <button
                type="button"
                className="btn btn-secondary rounded-circle"
                id="edit-btn">
                <i className="fas fa-pen"></i>
              </button>
            </NavLink>
          </div>
          <div className="col">
            <button
              onClick={toggleVisibility}
              type="button"
              className="btn btn-secondary rounded-circle"
              id="delete-btn">
              <i className="fas fa-times danger"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
