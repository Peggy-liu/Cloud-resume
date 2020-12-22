import React from 'react'
import {Link} from 'react-router-dom'

function Nav (props) {


  return (
    <div>
      <nav className={props.type==='welcome'? 'main_nav' : 'other_nav'}>
       <ul className='nav_link'>
         <Link to='/' className='link'><li>HOME</li></Link>
         <Link to='/resume' className='link'><li>CLOUD RESUME</li></Link>
         <Link to='/post' className='link'><li>POST</li></Link>
         <Link to='/contact' className='link'><li >CONTACT ME</li></Link>
         <Link to='/gallery' className='link'><li >ART GALLERY</li></Link>
       </ul>
      </nav>
    </div>
  )
}

export default Nav
