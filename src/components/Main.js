import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Weather from './Weather';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/weather' component={Weather}/>
    </Switch>
  </main>
)

export default Main