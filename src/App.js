import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Resume from "./Resume";
import Welcome from "./Welcome";



function App () {
  

  return (
    <Router>
      <Switch>
      <Route path='/' exact  component={Welcome} />
      <Route path='/resume'  component={Resume} />
      </Switch>
    </Router>
  )
}

export default App
