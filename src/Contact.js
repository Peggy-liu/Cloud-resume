import { API } from 'aws-amplify'
import { useState } from 'react'
import Theme from './Theme'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub, FaPenSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
      <motion.div
        exit={{ opacity: 0 }}
        className='bg-index grid grid-flow-row auto-rows-auto h-screen w-screen z-0 '
      >
        <Theme />
        <div class='place-self-start px-10 '>
          <p class='font-title text-3xl lg:text-5xl xl:text-7xl'>Contact Me</p>
        </div>
        <div class='grid grid-cols-2 gap-10 '>
          <div class='ml-20 mb-32  md:rounded-4xl bg-yellow2 flex flex-col justify-start  shadow-2xl '>
            <div>
              <Info type='EMAIL' value='peggylau1994@gmail.com' />
            </div>
            <div>
              <Info type='GITHUB' value='https://github.com/Peggy-liu' />
            </div>
            <div>
              {' '}
              <Info
                type='LINKEDIN'
                value='https://www.linkedin.com/in/peiqi-peggy-liu-a788aa155'
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}

const Info = props => {
  if (props.type === 'EMAIL') {
    return (
      <div class='p-7'>
        <MdEmail class='w-5 h-6 xl:w-7 xl:h-7' />
        <h3 class='font-subtitle xl:text-2xl lg:text-base'>{props.type}</h3>
        <p class='font-content xl:text-xl lg:text-base'>{props.value} </p>
      </div>
    )
  }
  if (props.type === 'GITHUB') {
    return (
      <div class='p-7'>
        <FaGithub class='w-5 h-6 xl:w-7 xl:h-7' />
        <h3 class='font-subtitle xl:text-2xl lg:text-base'>{props.type}</h3>
        <p class='font-content xl:text-xl lg:text-base'>
          <a href={props.value} class='text-black'>
            {props.value}{' '}
          </a>
        </p>
      </div>
    )
  }
  if (props.type === 'LINKEDIN') {
    return (
      <div class='p-7'>
        <AiFillLinkedin class='w-5 h-6 xl:w-7 xl:h-7' />
        <h3 class='font-subtitle xl:text-2xl lg:text-base'>{props.type}</h3>
        <p class='font-content xl:text-xl lg:text-base'>
          <a href={props.value} class='text-black'>
            {props.value}{' '}
          </a>
        </p>
      </div>
    )
  }
}

const ContactForm = () => {
  const [name, setName] = useState(' ')
  const [contact, setContact] = useState(' ')
  const [message, setMessage] = useState(' ')
  const [display, setDisplay] = useState({ display: 'none' })

  function handleSubmit (event) {
    setDisplay({ display: 'block' })
    event.preventDefault() //prevent the html form from submitting itself
    const apiName = 'SesApi'
    const path = '/email'
    const myInit = {
      body: {
        name: name,
        contact: contact,
        message: message
      }
    }
    API.post(apiName, path, myInit)
      .then(res => {
        setDisplay({ display: 'none' })
        alert(
          'Thank you ' +
            name +
            ', your message has been sent successfully! We will get back to you shortly!'
        )
      })
      .catch(error => {
        alert('Sorry, something goes wrong and your message has not been sent!')
        console.log(error)
      })
  }
  return (
    <div class='mr-12'>
      <h3 class='font-subtitle lg:text-xl xl:text-2xl inline'>LEAVE ME A MESSAGE </h3>
      <FaPenSquare class='w-5 h-5 xl:w-9 xl:h-9 inline' />
      <div class='grid grid-cols-2 gap-3 w-full  '>
        <div class='col-span-2 md:col-span-1'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            onChange={event => setName(event.target.value)}
            class='bg-index border-solid border-gray-400 border-2 p-2 xl:text-xl lg:text-base text-base w-full'
          />
        </div>
        <div class='col-span-2 md:col-span-1 '>
          <input
            type='text'
            name='contact'
            placeholder='email/phone'
            required
            class='bg-index border-solid border-gray-400 border-2 p-2 xl:text-xl lg:text-base text-base w-full'
            onChange={event => setContact(event.target.value)}
          />
        </div>
        <div class='col-span-2'>
          <textarea
            cols='30'
            rows='10'
            class='border-solid border-gray-400 border-2 p-2  bg-index xl:text-xl lg:text-base text-base w-full'
            placeholder='leave your message here, I will get back to you ASAP...'
            required
            onChange={event => setMessage(event.target.value)}
          />
        </div>
        <br />
        <button
          type='button'
          onClick={handleSubmit}
          class='w-2/12 lg:w-3/12 justify-self-end bg-green2 text-white font-subtitle text-sm lg:text-lg xl:text-xl rounded-2xl'
        >
          Send
        </button>
        <FaSpinner icon='spinner' className='spinner' style={display} />
      </div>
    </div>
  )
}

export default Contact
