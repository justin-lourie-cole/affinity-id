export const initialState = []

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addEmployees':
      return state.push(action.newEmployee)

    case 'removeEmployee':
      return state.filter(employee => employee.id !== action.id)

    case 'updateEmployee':
      return state.map(employee =>
        employee.id !== action.id ? action.updates : { ...employee }
      )
    default:
      return state
  }
}
