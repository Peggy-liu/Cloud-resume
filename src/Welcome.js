import React, { useState, useEffect } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { updateVisitorCount } from './graphql/mutations'
import { getVisitorCount } from './graphql/queries'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

Amplify.configure(awsconfig)

function Welcome () {
  const [visitors, setVisitors] = useState(0)

  //Uncommon this in production!!!
  useEffect(() => {
    fetchAndUpdateVisitors()
  }, [])

  async function fetchAndUpdateVisitors () {
    try {
      const response = await API.graphql(
        graphqlOperation(getVisitorCount, { id: '1' })
      )

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
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        className='bg-index flex flex-col items-center justify-center h-screen w-screen z-0 '
      >
        <InitialTransition />

        <div class='bg-index self-start md:w-full my-5 pt-4 '>
          <p class='font-header text-xl text-orange lg:text-2xl xl:text-4xl '>
            Peggy's Cloud Space
          </p>
        </div>
        <div class=' md:flex md:flex-row hidden md:h-2/3 md:w-5/6 xl:justify-end lg:justify-center  md:rounded-4xl md:bg-yellow2'>
          <div class='md:flex md:flex-col hidden pt-20 lg:space-y-3'>
            <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl  xl:text-8xl md:font-title '>
              Welcome
            </p>
            <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl  xl:text-8xl md:font-title md:tracking-wider md:text-center '>
              To
            </p>
            <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl  xl:text-8xl md:font-title md:text-right'>
              Peggy's
            </p>
            <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl  xl:text-8xl md:font-title md:text-left'>
              Cloud{' '}
            </p>
            <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl xl:text-8xl md:font-title md:text-right '>
              Space
            </p>
          </div>
          <div class='hidden md:flex items-center justify-center md:h-2/5 md:w-1/4 md:m-44 md:p-10  '>
            <div>
              <p class='hidden md:block text-2xl md:text-5xl lg:text-6xl md:font-subtitle animate-bounce'>
                You are visitor # {visitors}
              </p>
            </div>
          </div>
        </div>
        <div class='flex items-center justify-center z-10 box-content h-2/4 w-2/4 rounded-4xl bg-yellow2 md:hidden sm:block'>
          <p class='text-center font-title text-2xl'>
            Visitor
            <br />
            # <br /> {visitors}
          </p>
        </div>

        <nav class='pt-24'>
          <ul className='grid grid-rows-4 gap-2 text-lg md:grid-cols-4  md:text-2xl md:gap-x-20 lg:gap-x-20 xl:gap-x-72'>
            <Link to='/'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-center '>
                HOME
              </li>
            </Link>
            <Link to='/resume'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-center '>
                CLOUD RESUME
              </li>
            </Link>
            <Link to='/post'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-center '>
                POST
              </li>
            </Link>
            <Link to='/contact'>
              <li class='text-white rounded-lg border-opacity-0 hover:bg-orange font-subtitle text-center '>
                CONTACT ME
              </li>
            </Link>
          </ul>
        </nav>
      </motion.div>
    </div>
  )
}

export default Welcome

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1,
      ease: [0.87, 0, 0.13, 1]
    }
  }
}

const textContainer = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: 'afterChildren'
    }
  }
}

const text = {
  initial: {
    y: 40
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
}

const InitialTransition = () => {
  return (
    <motion.div
      className='absolute z-50 flex items-center justify-center w-full bg-black'
      initial='initial'
      animate='animate'
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add('overflow-hidden')}
      onAnimationComplete={() =>
        document.body.classList.remove('overflow-hidden')
      }
    >
      <motion.svg variants={textContainer} class='absolute z-50 flex w-full'>
        <pattern
          id='pattern'
          patternUnits='userSpaceOnUse'
          width={750}
          height={800}
          className='text-white'
        >
          <rect class='w-full h-full fill-current' />
          <motion.rect
            variants={text}
            class='w-full h-full text-gray-600 fill-current'
          />
        </pattern>
        <text
          class='text-xl md:text-3xl font-bold'
          text-anchor='middle'
          x='50%'
          y='50%'
          style={{ fill: 'url(#pattern)' }}
        >
          Powered By AWS Amplify
        </text>
      </motion.svg>
    </motion.div>
  )
}
