import cn from 'classnames'
import React from 'react'

import { MediaArticle } from '@/ui/sections/MediaSection/MediaArticle/MediaArticle'

import s from './MediaSection.module.scss'

const artilces = [
  {
    title:
      'СМИ vs. Реальность. Как это волнительно – попадать в ведущие деловые издания',
    portal: 'Ведомости',
    date: '18 августа, 2022'
  },
  {
    title: 'Как увеличить узнаваемость сервиса в 2 раза',
    portal: 'Esquire',
    date: '19 августа, 2022'
  },
  {
    title:
      'Основательница PR-агентства две недели тестировала сервис нетворкинга для предпринимателей',
    portal: 'РБК Pro',
    date: '20 августа, 2022'
  },
  {
    title: 'Как IT-компаниям завоевать внимание топовых СМИ',
    portal: 'vc.ru',
    date: '21 августа, 2022'
  }
]

export const MediaSection = () => {
  return (
    <section id='media' className={s.media}>
      <div className={cn('container', s.media__inner)}>
        <h2 className={s.media__title}>СМИ о нас</h2>
        <div className={s.media__list}>
          {artilces.map((article, idx) => (
            <MediaArticle {...article} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
