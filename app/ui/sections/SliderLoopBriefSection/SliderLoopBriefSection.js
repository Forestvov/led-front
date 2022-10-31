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
  speed: 8000,
  grabCursor: false
}

export const SliderLoopBriefSection = () => {
  return (
    <div className={s.slider}>
      <Swiper {...paramsSlider} className={s.slider__inner}>
        <SwiperSlide className={s.slider__item}>
          <a className={s.slider__link}>Заполнить бриф</a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a className={s.slider__link}>Заполнить бриф</a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a className={s.slider__link}>Заполнить бриф</a>
        </SwiperSlide>
        <SwiperSlide className={s.slider__item}>
          <a className={s.slider__link}>Заполнить бриф</a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
