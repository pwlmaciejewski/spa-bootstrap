import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { MainPage } from './pages'

export default () => (
  <Switch>
    <Route path='/' exact={true} component={MainPage} />
    <Redirect to='/' />
  </Switch>
)
