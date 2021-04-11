import nock from 'nock'

import {
  fetchEmployees,
  fetchEmployeeById,
  updateEmployee,
  deleteEmployee
} from './apiClient'
import { mockdb } from '../testUtilities/mockdb'

const baseUrl = 'http://localhost:3004/employees/'

describe('fetchEmployees', () => {
  const scope = nock(baseUrl).get().reply(200, mockdb)

  it('should return a list of all employees', () => {
    expect.assertions(2)
    return fetchEmployees().then(employees => {
      expect(employees).toEqual(mockdb)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('fetchEmployeeById', () => {
  const scope = nock(baseUrl).get(1).reply(200, mockdb[0])

  it('should return the first employee', () => {
    expect.assertions(2)
    return fetchEmployeeById(1).then(employee => {
      expect(employee).toEqual(mockdb[0])
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('updateEmployee', () => {
  const newAddress = '4 Privet Drive, Surrey'
  const scope = nock(baseUrl).patch(1, newAddress).reply(201, mockdb[0])

  it('should update the first employees address', () => {
    expect.assertions(2)
    return updateEmployee(1, newAddress).then(employee => {
      expect(employee).toEqual(mockdb[0])
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})

describe('deleteEmployee', () => {
  const scope = nock(baseUrl).delete(1).reply(200, {})

  it('should delete the first employee', () => {
    expect.assertions(1)
    return deleteEmployee(1).then(() => {
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})
