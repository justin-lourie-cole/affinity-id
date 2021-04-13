export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'

export const addEmployee = newEmployee => {
  return {
    type: ADD_EMPLOYEE,
    newEmployee
  }
}

export const removeEmployee = id => {
  return {
    type: REMOVE_EMPLOYEE,
    id
  }
}

export const updateEmployee = (id, updates) => {
  return {
    type: UPDATE_EMPLOYEE,
    id,
    updates
  }
}
