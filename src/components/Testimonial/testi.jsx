import React from 'react'
import './testi.css'
import avt1 from '../../assets/img1.png'
import avt2 from '../../assets/img2.png'
import avt3 from '../../assets/img3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const data = [
  {
    avatar: avt1,
    name: 'Rey',
    review: 'its look good'
  },
  {
    avatar: avt2,
    name: 'Helmi',
    review: 'its very nice'
  },
  {
    avatar: avt3,
    name: 'Firman',
    review: 'Good job bro'
  },
]

const testi = () => {
  return (
    <section className="" id="testi">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container" effect={'cards'} grabCursor={true} modules={[EffectCards]}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testi