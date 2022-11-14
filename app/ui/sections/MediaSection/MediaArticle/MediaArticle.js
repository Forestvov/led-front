import React from 'react'

import s from './MediaArticle.module.scss'

export const MediaArticle = props => {
  const { name, shortDescription, date, link } = props

  return (
    <a href={link} target='_blank' className={s.article} rel='noreferrer'>
      <h3 className={s.article__title}>{shortDescription}</h3>
      <div className={s.article__portal}>{name}</div>
      <div className={s.article__date}>{date}</div>
    </a>
  )
}
