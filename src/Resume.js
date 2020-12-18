import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './Nav'

function Resume () {
  const [resume, setResume] = useState({})

  const fetch_resume = () => {
    const data = require('./resume.json')
    return data
  }

  useEffect(() => {
    setResume(fetch_resume())
  }, [])

  return (
    <div id='resume'>
      <Theme />
      <Collapsible title='EDUCATION' content={resume.education} />
      <Collapsible title='CERTIFICATION' content={resume.cert} />
      <Collapsible title='SKILLS' content={resume.skills} />
      <Collapsible title='INDUSTRIAL PROJECT' content={resume.project} />
      <Collapsible title='MY CAREER GOAL' content={resume.objective} />
      <Collapsible
        title='HOSPITALITY EXPERIENCE'
        content={resume.hospitality}
      />
      <Collapsible title='ABOUT ME' content={resume.me} />
    </div>
  )
}

const Collapsible = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [display, setDisplay] = useState({ display: 'none' })

  const changeDisplay = () => {
    if (isOpen) {
      setIsOpen(false)
      setDisplay({ display: 'none' })
    } else {
      setIsOpen(true)
      setDisplay({ display: 'block' })
    }
  }

  if (typeof props.content === typeof []) {
    return (
      <div id='resume-collapse'>
        <button type='button' className='collapsibleBT' onClick={changeDisplay}>
          {props.title}
        </button>
        <div className='collapsible-content' style={display}>
          {props.content.map(item => convert(item))}
        </div>
      </div>
    )
  } else {
    return (
      <div id='resume-collapse'>
        <button type='button' className='collapsibleBT' onClick={changeDisplay}>
          {props.title}
        </button>
        <div className='collapsible-content' style={display}>
          {props.content}
        </div>
      </div>
    )
  }
}

function convert (item) {
  for (const [key, value] of Object.entries(item)) {
    if (Array.isArray(value)) {
      var result = value.map((element, index) => {
        console.log(element);
        return (
          <div>
            <ul>
              <li id={index}>{element}</li>
            </ul>
          </div>
        )
      })
       result.unshift((<h3>{key.toUpperCase()}</h3>));
       return result;
    } else {
      return (
        <div>
          <h3>{key.toUpperCase()}</h3>
          <ul>
            <li>{value}</li>
          </ul>
        </div>
      )
    }
  }
}

const Theme = () => {
  return (
    <div id='resume-title-box'>
      <span id='resume-title'>
        RESUME ON THE CLOUD, ACCESS ANYWHERE, WHENEVER YOU NEED
      </span>
      <Nav type='other' />
    </div>
  )
}

export default Resume
