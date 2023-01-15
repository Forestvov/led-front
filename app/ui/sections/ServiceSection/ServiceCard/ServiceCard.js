import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { useOnOutsideClick } from '@/hooks/useOnOutsideClick'
import useWindowSize from '@/hooks/useWindowSize'

import s from './ServiceCard.module.scss'

const CardContent = ({
  hover,
  image,
  name,
  number,
  link,
  description,
  isMobile
}) => (
  <div className={s.card__content}>
    <div className={s.card__icon}>
      <img src={image} alt={name} />
    </div>
    <div className={s.card__number}>{number > 9 ? number : '0' + number}</div>
    <div className={s.card__title}>{name}</div>
    <AnimateHeight duration={800} height={hover ? 'auto' : 0}>
      <div>
        <div
          className={s.card__text}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {isMobile && (
          <a
            className={s.mobileLink}
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            Заполнить бриф
          </a>
        )}
      </div>
    </AnimateHeight>
  </div>
)

export const ServiceCard = props => {
  const { number, position, image, name, textUsUrl, description, colors } =
    props

  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  const { width } = useWindowSize()

  useEffect(() => {
    if (number === 1 && width <= 1023 && width > 0) {
      setHover(true)
    }
  }, [number, width])

  useOnOutsideClick(ref, () => (width <= 1023 ? setHover(false) : null))

  return width <= 1023 ? (
    <div
      ref={ref}
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
        link={textUsUrl}
        isMobile
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
