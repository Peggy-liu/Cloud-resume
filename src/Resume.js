import React, { useState, useEffect } from 'react'
import resume1 from './images/resume1.pdf'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Theme from './Theme'
import { HashLink } from 'react-router-hash-link'
import { GrLinkTop } from 'react-icons/gr'

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
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        className='bg-index grid justify-items-center grid-flow-row auto-rows-auto  h-screen w-screen z-0'
      >
        <Theme />

        <div class='place-self-start px-4 md:px-10 md:py-16 '>
          <p class='font-title text-2xl md:text-7xl'>Cloud Resume</p>
        </div>
        <div class='place-self-end flex flex-row mx-16'>
          <AiOutlineFilePdf class='w-5 h-6 md:w-10 md:h-11' />
          <a
            href={resume1}
            id='download'
            download='resume.pdf'
            class='animate-pulse '
          >
            <span class='font-sans font-black text-sm md:text-base'>
              Download PDF Version
            </span>
          </a>
        </div>

        <div class='grid grid-cols-1 z-10 box-content md:h-5/6 md:w-11/12 relative rounded-4xl bg-white overflow-auto'>
          <div class='box-content h-1/4 md:p-16 md:m-10 p-10 m-5 bg-yellow2 rounded-3xl '>
            <p class='text-sm font-sans md:leading-relaxed md:text-2xl'>
              My resume is served through AWS cloud services. You are welcome to
              browse my resume through this cloud space anytime, anywhere.{' '}
              <br /> PDF version of this resume is also available and you can
              download it through the link above.
            </p>
          </div>
          <div class='py-2 px-10 md:p-10' id='list'>
            <ul class='list-disc list-inside'>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#edu'
                >
                  EDUCATION
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#cert'
                >
                  CERTIFICATION
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#skills'
                >
                  SKILLS
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#project'
                >
                  INDUSTRIAL PROJECT
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#goal'
                >
                  MY CAREER GOAL
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#experience'
                >
                  HOSPITALITY EXPERIENCE
                </HashLink>
              </li>
              <li>
                <HashLink
                  class='text-black font-subtitle text-base md:text-2xl transition duration-500 ease-in-out hover:bg-green2 hover:text-white'
                  smooth
                  to='/resume/#me'
                >
                  ABOUT ME
                </HashLink>
              </li>
            </ul>
          </div>
          <div class='place-self-end px-6'>
            <HashLink smooth to='/resume#list' class='fixed'>
              <GrLinkTop class=' w-8 h-5' />
            </HashLink>
          </div>

          <Content title='EDUCATION' content={resume.education} id='edu' />
          <Content title='CERTIFICATION' content={resume.cert} id='cert' />
          <Content title='SKILLS' content={resume.skills} id='skills' />
          <Content
            title='INDUSTRIAL PROJECT'
            content={resume.project}
            id='project'
          />
          <Content
            title='MY CAREER GOAL'
            content={resume.objective}
            id='goal'
          />
          <Content
            title='HOSPITALITY EXPERIENCE'
            content={resume.hospitality}
            id='experience'
          />
          <Content title='ABOUT ME' content={resume.me} id='me' />
        </div>
      </motion.div>
    </div>
  )
}

const Content = props => {
  if (typeof props.content === typeof []) {
    return (
      <div class='p-6 md:p-10'>
        <h3 id={props.id} class='font-content_header text-lg md:text-2xl'>
          {props.title}
        </h3>
        <div class='py-6 '>{props.content.map(item => convert(item))}</div>
      </div>
    )
  } else {
    return (
      <div class='p-6 md:p-10'>
        <h3 id={props.id} class='font-content_header text-lg md:text-2xl'>
          {props.title}
        </h3>
        <div class='font-content text-base md:text-lg py-6'>
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
          <div class='p-6'>
            <ul class='list-disc list-inside font-content text-base md:text-lg'>
              <li id={index}>{element}</li>
            </ul>
          </div>
        )
      })
      result.unshift(
        <h3 class='text-base md:text-xl font-serif my-4'>
          {key.toUpperCase()}
        </h3>
      )
      return result
    } else {
      return (
        <div class='py-3 md:py-6'>
          <h3 class='text-base md:text-xl font-serif py-3 md:py-6'>
            {key.toUpperCase()}
          </h3>
          <ul class='list-disc list-inside font-content text-base md:text-lg'>
            <li>{value}</li>
          </ul>
        </div>
      )
    }
  }
}

export default Resume
