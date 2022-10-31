import cn from 'classnames'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { AboutSliderItem } from '@/ui/sections/AboutSection/AboutSliderItem/AboutSliderItem'

import s from './AboutSection.module.scss'

const slides = [
  { id: 0, title: 'IT' },
  { id: 1, title: 'Retail' },
  { id: 2, title: 'Startups&Tech' },
  { id: 3, title: 'Банки и финансы' },
  { id: 4, title: 'E-Commerce' },
  { id: 5, title: 'Промышленность' },
  { id: 6, title: 'Логистика' }
]

const paramsSlider = {
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  spaceBetween: 110,
  slidesPerView: 'auto',
  speed: 5000,
  grabCursor: false
}

export const AboutSection = () => {
  return (
    <section id='about' className={s.about}>
      <div className={cn('container', s.about__container)}>
        <h2 className={s.about__title}>
          Профессиональная экспертиза и высокие стандарты работы с компаниями из
          разных отраслей
        </h2>

        <Swiper className={s.about__slider} {...paramsSlider}>
          {slides.map((slide, idx) => (
            <SwiperSlide key={slide.id} className={s.about__slide}>
              <AboutSliderItem number={idx + 1} title={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.about__description}>
          <h3 className={s.about__description_title}>Что такое LED PR</h3>
          <div className={s.about__description_content}>
            <p className={s.about__description_text}>
              Мы помогаем бизнесу рассказать о себе на страницах федеральных и
              отраслевых СМИ, в залах крупнейших конференций, в теле и
              радио-эфирах.
            </p>
            <a className={s.about__description_project}>Обсудить проект</a>
          </div>
        </div>
      </div>
      <div className={s.about__bg} />
    </section>
  )
}
