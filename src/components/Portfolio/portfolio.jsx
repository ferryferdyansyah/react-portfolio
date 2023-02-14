import React from 'react'
import './portfolio.css'
import img1 from '../../assets/p1.png'
import img2 from '../../assets/p2.png'
import img3 from '../../assets/p3.png'
import img4 from '../../assets/p4.png'
import img5 from '../../assets/p5.png'
import img6 from '../../assets/p6.png'
// import img6 from '../../assets/p6.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'WebGIS Fullstack With PHP Language',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: img2,
    title: 'Responsive Web With HTML, CSS, Bootstrap',
    github: 'https://github.com/ferryferdyansyah/responsive-web-bs',
    demo: 'https://ferryferdyansyah.github.io/responsive-web-bs/'
  },
  {
    id: 3,
    image: img3,
    title: 'Responsive CV Web Just With HTML & CSS3',
    github: 'https://github.com/ferryferdyansyah/Simple-Portfolio-CV',
    demo: 'https://ferryferdyansyah.github.io/Simple-Portfolio-CV/'
  },
  {
    id: 4,
    image: img4,
    title: 'Responsive Web With HTML, CSS, Bootstrap, React Js',
    github: 'https://github.com/ferryferdyansyah/ReactGame',
    demo: 'https://ferryferdyansyah.github.io/ReactGame/'
  },
  {
    id: 5,
    image: img5,
    title: 'Data Movies Web From The Movie Database API',
    github: 'https://github.com/ferryferdyansyah/try-api/',
    demo: 'https://try-api.vercel.app/'
  },
  {
    id: 6,
    image: img6,
    title: 'Online Shop with fake API store',
    github: 'https://github.com/ferryferdyansyah/e-toko/',
    demo: 'https://e-toko.vercel.app/'
  },
]

const portfolio = () => {
  return (
    <section className="" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id.toString()} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img5}/>
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio_item-cta">
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default portfolio