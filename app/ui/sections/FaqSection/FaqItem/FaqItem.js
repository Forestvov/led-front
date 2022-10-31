import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import s from './FaqItem.module.scss'

export const FaqItem = ({ title, text }) => {
  const [show, setShow] = useState(false)
  return (
    <div className={s.item}>
      <div className={s.item__header} onClick={() => setShow(!show)}>
        <span className={s.item__title}>{title}</span>
        <button className={cn(s.item__button, { [s.active]: show })}>
          <span />
          <span />
        </button>
      </div>
      <AnimateHeight height={show ? 'auto' : 0}>
        <div className={s.item__text}>{text}</div>
      </AnimateHeight>
    </div>
  )
}
