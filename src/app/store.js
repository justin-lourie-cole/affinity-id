import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../app/components/employees/employeesSlice'

const store = configureStore({
  reducer: {
    employees: employeesReducer
  }
})

export default store
