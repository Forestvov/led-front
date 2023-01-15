import React from 'react'

import s from '@/ui/sections/MainSection/MainSection.module.scss'
import { CircleArrow } from '@/ui/share/CircleArrow/CircleArrow'

export const BannerLink = ({ briefUrl }) => {
  return (
    <a
      className={s.main__brif}
      href={briefUrl}
      target='_blank'
      rel='noreferrer'
    >
      <i className={s.main__brif_icon}>
        <CircleArrow />
      </i>
      Заполнить бриф
    </a>
  )
}
