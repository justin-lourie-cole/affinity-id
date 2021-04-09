import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { deleteEmployee, getEmployees } from '../api/apiClient'
import { Context } from '../context/Context'

export const DeleteBox = ({ id, toggleVisibility }) => {
  const { setEmployees } = useContext(Context)
  let history = useHistory()

  const handleDelete = e => {
    deleteEmployee(id)
      .then(() => history.push('/'))
      .then(() => getEmployees())
      .then(res => setEmployees(res))
  }

  return (
    <div className="row p-2 showDeleteBox">
      <div className="col-4 d-flex align-items-center">
        <h6 className="are-you-sure">Are you sure?</h6>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light rounded-circle"
          id="edit-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-2">
        <button className="btn btn-light rounded-circle" id="delete-btn">
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
  )
}
