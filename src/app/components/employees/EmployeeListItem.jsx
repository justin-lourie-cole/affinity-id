import React from 'react'

export const Employee = props => {
  const { image, name, role, team } = props

  return (
    <div>
      <div className="row">
        <div className="col-3 list-img-wrapper">
          <img className="employee-list-img" src={image} alt="employee"></img>
        </div>

        <div className="col">
          <h4 className="text-start mb-0 mt-1">{name}</h4>
          <h5 className="text-start mb-1">{role}</h5>
          <h6 className="text-start mb-1">{team}</h6>
        </div>
      </div>
    </div>
  )
}
