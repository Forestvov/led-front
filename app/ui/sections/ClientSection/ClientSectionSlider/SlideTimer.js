import cn from 'classnames'
import React, { useEffect, useRef } from 'react'
import { useIsVisible } from 'react-is-visible'

import s from './ClientSectionSlider.module.scss'

export const SlideTimer = props => {
  const { current, total, currentSlideIndex, onChangeSlide } = props

  const ref = useRef()
  const isVisible = useIsVisible(ref)

  useEffect(() => {
    if (currentSlideIndex === current - 1 && isVisible) {
      let width = 1
      let autoplayTime = 10000 / 100

      let timer = setInterval(frame, autoplayTime)

      function frame() {
        if (width >= 100) {
          clearInterval(timer)
          ref.current.style.width = 0
          onChangeSlide(current - 1)
        } else {
          width++
          ref.current.style.width = width + '%'
        }
      }

      return () => {
        clearInterval(timer)
        ref.current.style.width = 0
      }
    }
  }, [currentSlideIndex, isVisible])

  return (
    <div
      className={cn(s.slide__timer, {
        [s.show]: currentSlideIndex === current - 1
      })}
    >
      <div className={s.slide__timer_current}>{current}</div>
      <div className={s.slide__timer_line}>
        <span className={cn(s.slide__timer_active)} ref={ref} />
      </div>
      <div className={s.slide__timer_total}>{total}</div>
    </div>
  )
}
