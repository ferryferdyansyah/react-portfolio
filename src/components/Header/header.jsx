import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee.png'
import Headersocial from './headersocial'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ferry Ferdyansyah</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CTA/>
        <Headersocial/>

        <div className="me">
          <img src={ME}/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header