import React, { useState, useEffect } from 'react'
import './App.css'
import Theme from './Theme'
import resume1 from './images/resume1.pdf'
import {AiOutlineFilePdf} from 'react-icons/ai'

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
      <Theme
        titleBoxStyle='resume-title-box'
        titleStyle='resume-title'
        titleValue='CLOUD RESUME'
      />
      <div className='resume-intro'>
        <p>My resume is served through AWS cloud services. You are welcome to browse my resume through this cloud space anytime, anywhere. <br/> PDF version of this resume is also
          available and you can download it through the link below.
        </p>
      </div>
      <AiOutlineFilePdf className='App-logo'/>
      <a href={resume1} id='download' download='resume.pdf'>
        Download PDF Version
      </a>
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
        console.log(element)
        return (
          <div>
            <ul>
              <li id={index}>{element}</li>
            </ul>
          </div>
        )
      })
      result.unshift(<h3>{key.toUpperCase()}</h3>)
      return result
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

export default Resume
