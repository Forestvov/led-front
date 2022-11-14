import React from 'react'
import { Link } from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'

import { links } from '@/data/links'

import s from './HeaderNavigation.module.scss'

const paramsSlider = {
  slidesPerView: 'auto',
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 33
    },
    768: {
      spaceBetween: 40
    }
  }
}

export const HeaderNavigationMobile = () => {
  return (
    <div className='container'>
      <Swiper className={s.navigation} {...paramsSlider}>
        {links.map(({ id, title, circle }) => (
          <SwiperSlide key={id} className={s.navigation__slide}>
            <Link to={id} spy={true} smooth={true}>
              <span className={s.navigation_title}>
                <span data-text={title}>{title}</span>
              </span>
              {circle ? <i className={s.icon} /> : null}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
