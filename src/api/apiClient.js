import request from 'superagent'

const baseUrl = 'http://localhost:3004/employees/'

export function fetchEmployees() {
  return request
    .get(baseUrl)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function addEmployee(employee) {
  return request
    .post(baseUrl)
    .send(employee)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function updateEmployee(id, data) {
  return request
    .patch(baseUrl + id, data)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function deleteEmployee(id) {
  return request
    .delete(baseUrl + id)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}
