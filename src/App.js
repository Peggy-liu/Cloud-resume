import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Resume from "./Resume"
import Welcome from "./Welcome"
import Post from "./Post"
import Gallery from "./Gallery"
import Contact from './Contact'



function App () {
  

  return (
    <Router>
      <Switch>
      <Route path='/' exact  component={Welcome} />
      <Route path='/resume'  component={Resume} />
      {/* <Route path='/post'  component={Post} /> */}
      <Route path='/gallery'  component={Gallery} />
      {/* <Route path='/contact'  component={Contact} /> */}
      </Switch>
    </Router>
  )
}

export default App
