import React from 'react'
import './App.css'
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import Resume from './Resume'
import Welcome from './Welcome'
import Post from './Post'
import BlogArticle from './BlogArticle'
import Contact from './Contact'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

import { AnimatePresence } from 'framer-motion'


Amplify.configure(awsconfig)

function App () {
  const location = useLocation()

  return (
    <AnimatePresence  exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Welcome} />
        <Route path='/resume' component={Resume} />
        <Route path='/post' exact component={BlogArticle} />
        <Route path='/post/create-amplify-app' component={BlogArticle} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </AnimatePresence>
  )
}

export default App
