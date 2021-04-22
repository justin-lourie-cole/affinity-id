import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee
} from '../../../api'

export const getEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchEmployees()
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)

export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (employee, { rejectWithValue }) => {
    try {
      const response = await createEmployee(employee)
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)

export const removeEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteEmployee(id)
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)

export const modifyEmployee = createAsyncThunk(
  'employees/modifyEmployee',
  async ({ id, ...fields }, { rejectWithValue }) => {
    try {
      const response = await updateEmployee(id, fields)
      return response
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
)
