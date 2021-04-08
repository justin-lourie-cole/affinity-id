import axios from 'axios'

const baseUrl = 'http://localhost:3004/employees/'

export function getEmployees() {
  return axios
    .get(baseUrl)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function getEmployeeById(id) {
  return axios
    .get(baseUrl + id)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function updateEmployee(id, data) {
  return axios
    .patch(baseUrl + id, data)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}

export function deleteEmployee(id) {
  return axios
    .delete(baseUrl + id)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err.response.text)
    })
}
