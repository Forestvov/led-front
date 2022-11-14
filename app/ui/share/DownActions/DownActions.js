import cn from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

import { DownloadIcon, MouseIcon, TelegramIcon } from '@/ui/index'

import s from './DownActions.module.scss'

export const DownActions = props => {
  const { color = '#fff', showScroll = true, presentation, telegramUrl } = props

  return (
    <div
      className={cn('container', s.actions, { [s.black]: color === '#000' })}
    >
      {presentation && (
        <a
          className={s.actions__download}
          href={presentation}
          target='_blank'
          download={true}
          rel='noreferrer'
        >
          <i>
            <DownloadIcon />
          </i>
          <span>Загрузить презентацию</span>
        </a>
      )}
      {showScroll && (
        <Link to='about' spy={true} smooth={true}>
          <button className={s.actions__scroll}>
            <i>
              <MouseIcon />
            </i>
          </button>
        </Link>
      )}
      {telegramUrl && (
        <a
          target='_blank'
          href={telegramUrl}
          className={s.actions__telegram}
          rel='noreferrer'
        >
          <i>
            <TelegramIcon />
          </i>
          <span>Написать в Telegram</span>
        </a>
      )}
    </div>
  )
}
