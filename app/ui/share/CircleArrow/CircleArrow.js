import React from 'react'

import { ArrowRight } from '@/ui/index'

import s from './CircleArrow.module.scss'

export const CircleArrow = () => {
  return (
    <span className={s.circle}>
      <ArrowRight />
      <ArrowRight />
    </span>
  )
}
