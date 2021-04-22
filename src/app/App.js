import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getEmployees } from './components/employees/services'

import { Header, Create, EmployeeList } from './components'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  return (
    <>
      <>
        <div className="row">
          <Header />
        </div>
      </>
      <>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <EmployeeList />
          </div>
          <div className="col d-flex justify-content-center">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/create" component={Create} />
              {/* <Route exact path="/:id" component={Selected} /> */}
              {/* <Route exact path="/:id/edit" component={Edit} /> */}
            </Switch>
          </div>
        </div>
      </>
    </>
  )
}
