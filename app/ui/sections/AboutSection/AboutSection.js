import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
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
  allowTouchMove: false,
  speed: 5000,
  grabCursor: false,
  breakpoints: {
    1600: {
      spaceBetween: 110
    },
    1280: {
      spaceBetween: 100
    },
    1024: {
      spaceBetween: 90
    },
    768: {
      spaceBetween: 70
    },
    320: {
      spaceBetween: 55
    }
  }
}

export const AboutSection = props => {
  const { topBlock, branches, bottomBlock, discussProjectUrl } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id='about' className={s.about}>
      <div className={cn('container', s.about__container)}>
        <h2
          className={s.about__title}
          dangerouslySetInnerHTML={{ __html: topBlock.title }}
        />

        <Swiper className={s.about__slider} {...paramsSlider}>
          {branches.map((branch, idx) => (
            <SwiperSlide key={idx} className={s.about__slide}>
              <AboutSliderItem number={idx + 1} title={branch.name} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.about__description}>
          <h3
            className={s.about__description_title}
            dangerouslySetInnerHTML={{ __html: bottomBlock.title }}
          />
          <div className={s.about__description_content}>
            <div className={s.about__description_text}>
              <div
                dangerouslySetInnerHTML={{ __html: bottomBlock.description }}
              />
            </div>

            {bottomBlock.fullDescription !== null && (
              <AnimateHeight height={isOpen ? 'auto' : 0}>
                <div className={s.about__description_text}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: bottomBlock.fullDescription
                    }}
                  />
                </div>
              </AnimateHeight>
            )}

            {bottomBlock.fullDescription !== null && (
              <button
                className={s.about__description_more}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? 'Свернуть' : 'Читать далее'}
              </button>
            )}

            <a
              className={s.about__description_project}
              href={discussProjectUrl}
              target='_blank'
              rel='noreferrer'
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
      <div className={s.about__bg} />
    </section>
  )
}
