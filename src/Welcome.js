import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './Nav'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from './aws-exports'
import { updateVisitorCount } from './graphql/mutations'
import { getVisitorCount } from './graphql/queries'


Amplify.configure(awsExports);

function Welcome(){
    const [visitors, setVisitors] = useState(0)

    //Uncommon this in production!!!
    // useEffect(() => {
    //   fetchAndUpdateVisitors()
    // }, [])
  
    async function fetchAndUpdateVisitors () {
      try {
        const response = await API.graphql(
          graphqlOperation(getVisitorCount, { id: '1' })
        )
        console.log(response)
        const num = response.data.getVisitorCount.count
        await API.graphql(
          graphqlOperation(updateVisitorCount, {
            input: { id: '1', count: num + 1 }
          })
        )
        setVisitors(num + 1)
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
      
      <div className='welcome-page'>
        <p className='index_title'>WELCOME TO MY ARTISTIC CLOUD SPACE</p>
        <p className='visitor_dashboard'>
          YOU ARE VISITOR # {visitors} TO MY SITE!
        </p>
        <Nav type='welcome'/>
      </div>
      
    )
}

export default Welcome;