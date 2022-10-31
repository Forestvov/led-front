import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import s from './ServiceCard.module.scss'

export const ServiceCard = props => {
  const { number, position, icon, title, text, colorFirst, colorSecond } = props

  const [hover, setHover] = useState(false)

  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(s.card, {
        [s.leftTop]: position === 'leftTop',
        [s.rightTop]: position === 'rightTop',
        [s.bottomLeft]: position === 'bottomLeft',
        [s.bottomRight]: position === 'bottomRight'
      })}
      style={{
        background: `linear-gradient(180deg, ${colorFirst} 0%, ${colorSecond} 100%)`
      }}
    >
      <div className={s.card__content}>
        <div className={s.card__icon}>
          <img src={icon} alt={title} />
        </div>
        <div className={s.card__number}>
          {number > 9 ? number : '0' + number}
        </div>
        <div className={s.card__title}>{title}</div>
        <AnimateHeight duration={800} height={hover ? 'auto' : 0}>
          <p className={s.card__text}>{text}</p>
        </AnimateHeight>
      </div>
    </a>
  )
}
