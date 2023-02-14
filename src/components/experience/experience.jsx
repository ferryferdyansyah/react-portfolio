import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section className="" id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* FRONT END START */}
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="exp_content">
            <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>JavaScriot</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>React-Js</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* FRONT END CLOSE */}


        {/* BACK END START */}
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="exp_content">
          <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experience</small>
              </div>
          </article>

          <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experience</small>
              </div>
          </article>

          <article className='exp_details'>
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experience</small>
              </div>
          </article>
        </div>
        </div>
        {/* BACK END CLOSE */}
      </div>
    </section>
  )
}

export default experience