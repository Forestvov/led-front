import React from 'react'

import s from './MediaArticle.module.scss'

export const MediaArticle = props => {
  const { portal, title, date } = props

  return (
    <a className={s.article}>
      <h3 className={s.article__title}>{title}</h3>
      <div className={s.article__portal}>{portal}</div>
      <div className={s.article__date}>{date}</div>
    </a>
  )
}
