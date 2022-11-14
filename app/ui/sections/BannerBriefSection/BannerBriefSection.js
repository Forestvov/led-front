import cn from 'classnames'
import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import { DownActions } from '@/ui/index'

import s from './BannerBriefSection.module.scss'

export const BannerBriefSection = props => {
  const { ctxBlock, presentation, briefUrl, telegramUrl } = props

  return (
    <ParallaxProvider>
      <section className={s.brief}>
        <ParallaxBanner
          layers={[
            {
              image: ctxBlock.image,
              speed: -40
            },
            {
              children: (
                <div className={cn('container', s.brief__container)}>
                  <div className={s.brief__content}>
                    <h2
                      className={s.brief__title}
                      dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
                    />
                    <a
                      className={s.brief__link}
                      href={briefUrl}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Заполнить бриф
                    </a>
                  </div>
                  <div className={s.brief__actions}>
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
