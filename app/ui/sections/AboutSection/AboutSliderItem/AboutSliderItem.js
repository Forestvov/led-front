import React from 'react'

import s from './AboutSliderItem.module.scss'

export const AboutSliderItem = ({ title, number }) => {
  return (
    <div className={s.item}>
      <div className={s.item__number}>
        <span className={s.item__value}>
          {number > 9 ? number : '0' + number}
        </span>
      </div>
      <span className={s.item__title}>{title}</span>
    </div>
  )
}
