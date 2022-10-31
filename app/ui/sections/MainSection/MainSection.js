import cn from 'classnames'
import React from 'react'

import { CircleArrow, DownActions } from '@/ui/index'

import s from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section className={s.main}>
      <div className={cn('container', s.main__content)}>
        <h1 className={s.main__title}>
          LED PR — коммуникационное агентство нового формата. Мы знаем, как
          сделать ваш бизнес узнаваемым.
        </h1>
        <a className={s.main__brif}>
          <i className={s.main__brif_icon}>
            <CircleArrow />
          </i>
          Заполнить бриф
        </a>
      </div>
      <div className={s.main__actions}>
        <DownActions />
      </div>
      <video className={s.main__video} muted autoPlay loop>
        <source src='/video/background.mp4' type='video/mp4' />
      </video>
    </section>
  )
}
