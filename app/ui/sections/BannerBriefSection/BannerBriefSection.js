import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import { DownActions } from '@/ui/index'
import { BannerLink } from '@/ui/sections/MainSection/BannerLink'

import { checkVisibleElement } from '@/helpers/checkVisibleElement'

import s from './BannerBriefSection.module.scss'

export const BannerBriefSection = props => {
  const { ctxBlock, presentation, briefUrl, telegramUrl } = props
  const [filter, setFilter] = useState(100)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const wrapper = window.document.getElementById('briefSection')
    window.addEventListener('scroll', function () {
      if (checkVisibleElement(wrapper)) {
        let top = wrapper.getBoundingClientRect().top - 200
        if (top <= 200 && top > 0) {
          setFilter(top - 100)
          setShow(true)
        } else if (top < 0) {
          setFilter(0)
        } else if (top > 200) {
          setFilter(100)
        }
      }
    })
  }, [])

  return (
    <ParallaxProvider>
      <section className={s.brief} id='briefSection'>
        <ParallaxBanner
          className={s.brief__image}
          layers={[
            {
              speed: -40,
              children: (
                <img
                  src={ctxBlock.image}
                  style={{
                    filter: `grayscale(${filter}%)`
                  }}
                  alt='Делаем ярко'
                />
              )
            },
            {
              children: (
                <div className={cn('container', s.brief__container)}>
                  <div className={cn(s.brief__content, { [s.animate]: show })}>
                    <h2
                      className={s.brief__title}
                      dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
                    />
                    <div className={s.brief__link}>
                      <BannerLink briefUrl={briefUrl} />
                    </div>
                  </div>
                  <div className={cn(s.brief__actions, { [s.animate]: show })}>
                    <DownActions
                      presentation={presentation}
                      telegramUrl={telegramUrl}
                      color='#000'
                      showScroll={false}
                    />
                  </div>
                </div>
              ),
              speed: -5
            }
          ]}
        />
      </section>
    </ParallaxProvider>
  )
}
