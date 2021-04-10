import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, EmployeeList, Edit, Create, Selected, NavV2 } from './components'

const App = () => {
  return (
    <div className="content app-padding">
      <div className="container">
        <NavV2 />
      </div>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center mb-4">
            <EmployeeList />
          </div>
          <div className="col d-flex justify-content-center">
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
