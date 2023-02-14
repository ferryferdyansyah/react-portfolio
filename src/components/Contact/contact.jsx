import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section className="" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>someone@gmail.com</h5>
            <a href='mailto:someone@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsInstagram className='contact_icon'/>
            <h4>Instagram</h4>
            <h5>ferryferdyansyah002</h5>
            <a href='https://www.instagram.com/'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>+62 895-3866-20300</h5>
            <a href='https://api.whatsapp.com/send?phone=0895386620300' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact