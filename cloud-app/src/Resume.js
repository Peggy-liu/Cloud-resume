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
      <Collapsible title='education' content='test' />
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
     return(
        <div id='resume-collapse'>
        <button type='button' className='collapsibleBT' onClick={changeDisplay}>
          {props.title}
        </button>
        <div className='collapsible-content' style={display}>
          <ul>Backend</ul>
          {props.content[0].backend.map(item => (
              <li>{item}</li>
          ))}
        </div>
      </div>
     );
    // props.content.map(obj => {
    //   for (const [key, value] of Object.entries(obj)) {
    //     if (typeof value === typeof []) {
    //       return (
    //         <div id='resume-collapse'>
    //           <button
    //             type='button'
    //             className='collapsibleBT'
    //             onClick={changeDisplay}
    //           >
    //             {props.title}
    //           </button>
    //           <div className='collapsible-content' style={display}>
    //             <ul>{key}</ul>
    //             {value.map(item => (
    //               <li>{item}</li>
    //             ))}
    //           </div>
    //         </div>
    //       )
    //     } else {
    //     }
    //   }
    // })
  } 
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
