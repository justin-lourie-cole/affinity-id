import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, EmployeeList, Edit, Create, Selected, Nav } from './components'
import { fetchEmployees } from './api/apiClient'
import { EmployeeContext } from './context/Context'

const App = () => {
  const { setEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    fetchEmployees().then(res => {
      setEmployees(res)
    })
  }, [setEmployees])

  return (
    <div className="content app-padding">
      <div className="container">
        <Nav />
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center mb-4">
            <EmployeeList />
          </div>
          <div className="col d-flex justify-content-center pb-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/:id" component={Selected} />
              <Route exact path="/:id/edit" component={Edit} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
