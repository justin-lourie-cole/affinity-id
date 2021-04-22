import { createSlice } from '@reduxjs/toolkit'
import {
  getEmployees,
  addEmployee,
  removeEmployee,
  modifyEmployee
} from './services'

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: { employees: [], status: null, error: null },
  extraReducers: {
    [addEmployee.pending]: state => {
      state.status = 'loading'
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      state.employees.push(payload)
      state.status = 'success'
    },
    [addEmployee.rejected]: (state, { payload, error }) => {
      state.status = 'failed'
      if (payload) {
        state.error = payload.errorMessage
      } else {
        state.error = error
      }
    },

    [removeEmployee.pending]: state => {
      state.status = 'loading'
    },
    [removeEmployee.fulfilled]: (state, { payload }) => {
      state.employees = state.employees.filter(({ id }) => id !== payload)
      state.status = 'success'
    },
    [removeEmployee.rejected]: (state, { payload, error }) => {
      state.status = 'failed'
      if (payload) {
        state.error = payload.errorMessage
      } else {
        state.error = error
      }
    },

    [modifyEmployee.pending]: state => {
      state.status = 'loading'
    },
    [modifyEmployee.fulfilled]: (state, { payload }) => {
      state.employees[payload.id] = payload
      state.status = 'success'
    },
    [modifyEmployee.rejected]: (state, { payload, error }) => {
      state.status = 'failed'
      if (payload) {
        state.error = payload.errorMessage
      } else {
        state.error = error
      }
    },

    [getEmployees.pending]: state => {
      state.status = 'loading'
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.employees = payload
      state.status = 'success'
    },
    [getEmployees.rejected]: (state, { payload, error }) => {
      state.status = 'failed'
      if (payload) {
        state.error = payload.errorMessage
      } else {
        state.error = error
      }
    }
  }
})

export default employeesSlice.reducer
