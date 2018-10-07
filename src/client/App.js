import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'

// import components here
import { Home } from './components'
export default function App () {
  return (
    <div>
      It's ALIVE
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  )
}
