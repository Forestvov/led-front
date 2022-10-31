import cn from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

import { DownloadIcon, MouseIcon, TelegramIcon } from '@/ui/index'

import s from './DownActions.module.scss'

export const DownActions = ({ color = '#fff', showScroll = true }) => {
  return (
    <div
      className={cn('container', s.actions, { [s.black]: color === '#000' })}
    >
      <a className={s.actions__download}>
        <i>
          <DownloadIcon />
        </i>
        <span>Загрузить презентацию</span>
      </a>
      {showScroll && (
        <Link to='about' spy={true} smooth={true}>
          <button className={s.actions__scroll}>
            <i>
              <MouseIcon />
            </i>
          </button>
        </Link>
      )}
      <a target='_blank' className={s.actions__telegram}>
        <i>
          <TelegramIcon />
        </i>
        <span>Написать в Telegram</span>
      </a>
    </div>
  )
}
