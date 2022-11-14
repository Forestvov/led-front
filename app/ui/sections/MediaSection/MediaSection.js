import cn from 'classnames'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MediaArticle } from '@/ui/index'

import s from './MediaSection.module.scss'

const paramSlider = {
  slidesPerView: 'auto',
  breakpoints: {
    1600: {
      spaceBetween: 24,
      slidesPerView: 4
    },
    768: {
      spaceBetween: 20
    },
    320: {
      spaceBetween: 10
    }
  }
}

export const MediaSection = ({ ctxBlock, articles }) => {
  return (
    <section id='media' className={s.media}>
      <div className={cn('container', s.media__inner)}>
        <h2
          className={s.media__title}
          dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
        />
        <Swiper {...paramSlider} className={s.media__list}>
          {articles.map((article, idx) => (
            <SwiperSlide className={s.media__slide} key={idx}>
              <MediaArticle {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
