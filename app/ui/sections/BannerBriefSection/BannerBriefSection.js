import cn from 'classnames'
import React from 'react'

import { DownActions } from '@/ui/index'

import s from './BannerBriefSection.module.scss'

export const BannerBriefSection = () => {
  return (
    <section className={s.brief}>
      <div className={cn('container', s.brief__container)}>
        <div className={s.brief__content}>
          <h2 className={s.brief__title}>Делаем ярко Мыслим свежо</h2>
          <a className={s.brief__link}>Заполнить бриф</a>
        </div>
        <div className={s.brief__actions}>
          <DownActions color='#000' showScroll={false} />
        </div>
      </div>
      <img className={s.brief__bg} src='/moc/brief/bg.jpg' alt='' />
    </section>
  )
}
