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
        className='bg-index grid justify-items-center items-center grid-flow-row auto-rows-auto  h-screen w-screen z-0 '
      >
        <Theme />
        <div class='place-self-start px-4 md:px-10  '>
          <p class='font-title text-2xl md:text-7xl'>Contact Me</p>
        </div>
        <div class='grid grid-cols-2 md:w-full md:h-full'>
          <div class='md:pl-32 md:ml-32 md:rounded-4xl md:bg-yellow2 md:w-3/5 md:h-4/5 flex flex-col justify-center  shadow-2xl '>
            <Info type='EMAIL' value='peggylau1994@gmail.com' />

            <Info type='GITHUB' value='https://github.com/Peggy-liu' />

            <Info
              type='LINKEDIN'
              value='https://www.linkedin.com/in/peiqi-peggy-liu-a788aa155'
            />
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
      <div class='md:p-7'>
        <MdEmail class='w-7 h-7' />
        <h3 class='font-subtitle md:text-2xl'>{props.type}</h3>
        <p class='font-content md:text-xl'>{props.value} </p>
      </div>
    )
  }
  if (props.type === 'GITHUB') {
    return (
      <div class='md:p-7'>
        <FaGithub class='w-7 h-7' />
        <h3 class='font-subtitle md:text-2xl'>{props.type}</h3>
        <p class='font-content md:text-xl '>
          <a href={props.value} class='text-black'>
            {props.value}{' '}
          </a>
        </p>
      </div>
    )
  }
  if (props.type === 'LINKEDIN') {
    return (
      <div class='md:p-7'>
        <AiFillLinkedin class='w-7 h-7' />
        <h3 class='font-subtitle md:text-2xl'>{props.type}</h3>
        <p class='font-content md:text-xl'>
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
    <div className='contact-info'>
      <h3 class='font-subtitle md:text-2xl inline'>LEAVE ME A MESSAGE </h3>
      <FaPenSquare class='w-9 h-9 inline' />
      <div class='grid grid-cols-2 gap-4 md:w-full '>
        
          <div class='col-span-2 md:col-span-1'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              onChange={event => setName(event.target.value)}
              class='bg-index border-solid border-gray-400 border-2 p-3 md:text-xl w-full'
            />
          </div>
          <div class='col-span-2 md:col-span-1 '>
            <input
              type='text'
              name='contact'
              placeholder='email/phone'
              required
              class='bg-index border-solid border-gray-400 border-2 p-3 md:text-xl w-full'
              onChange={event => setContact(event.target.value)}
            />
          </div>
          <div class='col-span-2'>
          <textarea cols="30" rows="10" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full bg-index"
            placeholder='leave your message here, I will get back to you ASAP...'
            required
            onChange={event => setMessage(event.target.value)}
          />
          </div>
          <br />
          <button type='button' onClick={handleSubmit} class='md:w-2/12 justify-self-end bg-green2 text-white font-subtitle text-xl' >Send</button>
          <FaSpinner icon='spinner' className='spinner' style={display} />
      
      </div>
    </div>
  )
}

export default Contact
