import cn from 'classnames'
import React from 'react'

import { CircleArrow, DownActions } from '@/ui/index'

import s from './MainSection.module.scss'

export const MainSection = props => {
  const { presentation, ctxBlock, telegramUrl, briefUrl } = props

  return (
    <section className={s.main}>
      <div className={cn('container', s.main__content)}>
        <h1
          className={s.main__title}
          dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
        />
        <a
          className={s.main__brif}
          href={briefUrl}
          target='_blank'
          rel='noreferrer'
        >
          <i className={s.main__brif_icon}>
            <CircleArrow />
          </i>
          Заполнить бриф
        </a>
      </div>
      <div className={s.main__actions}>
        <DownActions presentation={presentation} telegramUrl={telegramUrl} />
      </div>
      <video className={s.main__video} muted autoPlay playsInline loop>
        <source src={ctxBlock.video} type='video/mp4' />
      </video>
    </section>
  )
}
