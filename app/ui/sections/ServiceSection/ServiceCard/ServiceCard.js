import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import useWindowSize from '@/hooks/useWindowSize'

import s from './ServiceCard.module.scss'

const CardContent = ({ hover, image, name, number, description }) => (
  <div className={s.card__content}>
    <div className={s.card__icon}>
      <img src={image} alt={name} />
    </div>
    <div className={s.card__number}>{number > 9 ? number : '0' + number}</div>
    <div className={s.card__title}>{name}</div>
    <AnimateHeight duration={800} height={hover ? 'auto' : 0}>
      <div
        className={s.card__text}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </AnimateHeight>
  </div>
)

export const ServiceCard = props => {
  const { number, position, image, name, textUsUrl, description, colors } =
    props

  const [hover, setHover] = useState(false)

  const { width } = useWindowSize()
  return width <= 1023 ? (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(s.card, {
        [s.leftTop]: position === 'leftTop',
        [s.rightTop]: position === 'rightTop',
        [s.bottomLeft]: position === 'bottomLeft',
        [s.bottomRight]: position === 'bottomRight'
      })}
      style={{
        background: `linear-gradient(180deg, ${colors.first} 0%, ${colors.second} 100%)`
      }}
    >
      <CardContent
        description={description}
        image={image}
        number={number}
        hover={hover}
        name={name}
      />
    </div>
  ) : (
    <a
      href={textUsUrl}
      target='_blank'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(s.card, {
        [s.leftTop]: position === 'leftTop',
        [s.rightTop]: position === 'rightTop',
        [s.bottomLeft]: position === 'bottomLeft',
        [s.bottomRight]: position === 'bottomRight'
      })}
      style={{
        background: `linear-gradient(180deg, ${colors.first} 0%, ${colors.second} 100%)`
      }}
      rel='noreferrer'
    >
      <CardContent
        description={description}
        image={image}
        number={number}
        hover={hover}
        name={name}
      />
    </a>
  )
}
