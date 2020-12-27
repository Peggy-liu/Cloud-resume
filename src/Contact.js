import { API } from 'aws-amplify'
import { useState } from 'react'
import Theme from './Theme'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub , FaPenSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div id='contact'>
      <Theme
        titleBoxStyle='contact-title-box'
        titleStyle='contact-title'
        titleValue='CONTACT ME'
      />

      <Info type='EMAIL' value='peggylau1994@gmail.com' />

      <Info type='GITHUB' value='https://github.com/Peggy-liu' />

      <Info
        type='LINKEDIN'
        value='https://www.linkedin.com/in/peiqi-peggy-liu-a788aa155'
      />
      <ContactForm />
    </div>
  )
}

const Info = props => {
  if (props.type === 'EMAIL') {
    return (
      <div className='contact-info'>
        <h3 className='contact-header'>{props.type}</h3>
        <MdEmail className='App-logo' />
        <p className='contact-line-item'>{props.value} </p>
      </div>
    )
  }
  if (props.type === 'GITHUB') {
    return (
      <div className='contact-info'>
        <h3 className='contact-header'>{props.type}</h3>
        <FaGithub className='App-logo' />
        <p>
          <a className='contact-line-item' href={props.value}>
            {props.value}{' '}
          </a>
        </p>
      </div>
    )
  }
  if (props.type === 'LINKEDIN') {
    return (
      <div className='contact-info'>
        <h3 className='contact-header'>{props.type}</h3>
        <AiFillLinkedin className='App-logo' />
        <p>
          {' '}
          <a className='contact-line-item' href={props.value}>
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

  function handleSubmit (event) {
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
      .then(res =>
        alert(
          'Thank you ' +
            name +
            ', your message has been sent successfully! We will get back to you shortly!'
        )
      )
      .catch(error => {
        alert('Sorry, something goes wrong and your message has not been sent!')
        console.log(error)
      })
  }
  return (
    <div className='contact-info'>
      <h3 className='contact-header'>LEAVE ME A MESSAGE</h3>
      <FaPenSquare className='App-logo'/>
      <form onSubmit={handleSubmit}>
        <p>Your Name</p>
        <input
          type='text'
          name='name'
          placeholder='your name'
          size='80'
          required
          onChange={event => setName(event.target.value)}
        />
        <p>Your Contact</p>
        <input
          type='text'
          name='contact'
          placeholder='email/phone'
          size='80'
          required
          onChange={event => setContact(event.target.value)}
        />
        <p>Message</p>
        <textarea
          rows='20'
          cols='80'
          placeholder='leave your message here, I will get back to you ASAP...'
          required
          onChange={event => setMessage(event.target.value)}
        />
        <br />
        <input type='submit' id='submitBtn' />
      </form>
    </div>
  )
}

export default Contact
