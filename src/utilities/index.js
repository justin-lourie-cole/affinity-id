export const findById = (array, id) =>
  array.find(item => item.id === Number(id))

export const changeHandler = (e, data, setData) => {
  const { name, value } = e.target
  setData({ ...data, [name]: value })
}

export const filterByRole = (array, role) =>
  array.filter(item => item.role === role)

export const sortAtoZ = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
}

export const sortZtoA = (array, key) => {
  return array.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1
    }
    if (a[key] < b[key]) {
      return 1
    }
    return 0
  })
}

