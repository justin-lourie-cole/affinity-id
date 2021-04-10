import React from 'react'
import { useHistory } from 'react-router-dom'

export const Employee = ({ id, image, name, role, team }) => {
  const history = useHistory()

  const selectEmployee = () => history.push(`/${id}`)

  return (
    <div>
      {id && (
        <div
          className="card btn employee-list-card custom-radius shadow p-3 mb-4 bg-body"
          onClick={selectEmployee}>
          <div className="row">
            <div className="col-3 list-img-wrapper">
              <img
                className="employee-list-img"
                src={image}
                alt="employee"></img>
            </div>

            <div className="col">
              <h4 className="name text-start mb-0 mt-1">{name}</h4>
              <h5 className="role text-start mb-1">{role}</h5>
              <h6 className="team text-start mb-1">{team}</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
