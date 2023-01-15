import cn from 'classnames'
import React, { useEffect, useRef } from 'react'

import { DownActions } from '@/ui/index'
import { BannerLink } from '@/ui/sections/MainSection/BannerLink'

import s from './MainSection.module.scss'

export const MainSection = props => {
  const { presentation, ctxBlock, telegramUrl, briefUrl } = props

  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      ref.current.play()
    }
  }, [])

  return (
    <section className={s.main}>
      <div className={cn('container', s.main__content)}>
        <h1
          className={s.main__title}
          dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
        />
        <BannerLink briefUrl={briefUrl} />
      </div>
      <div className={s.main__actions}>
        <DownActions presentation={presentation} telegramUrl={telegramUrl} />
      </div>
      <video
        ref={ref}
        className={s.main__video}
        muted
        autoPlay
        playsInline
        loop
      >
        <source src={ctxBlock.video} type='video/mp4' />
      </video>
    </section>
  )
}
