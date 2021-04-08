import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, EmployeeList, Edit, Create, Selected, Nav } from './components'

const App = () => {
  return (
    <div className="content">
      <div className="container-xl mt-5 pt-4">
        <Nav />
        <div className="container" id="employeeList">
          <EmployeeList />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/:id" component={Selected} />
            <Route exact path="/:id/edit" component={Edit} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
