import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './SliderLoopBriefSection.module.scss'

const paramsSlider = {
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  spaceBetween: 100,
  slidesPerView: 'auto',
  allowTouchMove: false,
  speed: 10000,
  grabCursor: false,
  breakpoints: {
    1280: {
      spaceBetween: 100
    },
    1024: {
      spaceBetween: 140
    },
    768: {
      spaceBetween: 100
    },
    320: {
      spaceBetween: 50
    }
  }
}

export const SliderLoopBriefSection = ({ briefUrl }) => {
  return (
    <div className={s.slider}>
      <Swiper {...paramsSlider} className={s.slider__inner}>
        <SwiperSlide className={s.slider__item}>
          <a
            className={s.slider__link}
            href={briefUrl}
            target='_blank'
            rel='noreferrer'
          >
            Заполнить бриф
          </a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a
            className={s.slider__link}
            href={briefUrl}
            target='_blank'
            rel='noreferrer'
          >
            Заполнить бриф
          </a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a
            className={s.slider__link}
            href={briefUrl}
            target='_blank'
            rel='noreferrer'
          >
            Заполнить бриф
          </a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a
            className={s.slider__link}
            href={briefUrl}
            target='_blank'
            rel='noreferrer'
          >
            Заполнить бриф
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
