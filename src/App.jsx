import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, EmployeeList, Edit, Create, Selected, Nav } from './components'

const App = () => {
  return (
    <div className="content p-5 m-5">
      <div className="container-xl px-5">
        <Nav />
        <div className="container" id="employeeList">
          <div className="row">
            <div className="col">
              <EmployeeList />
            </div>
            <div className="col">
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
    </div>
  )
}

export default App
