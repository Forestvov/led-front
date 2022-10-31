import cn from 'classnames'
import React from 'react'

import { HeaderNavigation, LogoIcon } from '@/ui/index'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn(s.header__container, 'container')}>
        <a className={s.header__logo}>
          <LogoIcon />
          <span className={s.header__logo_text}>
            branding, pr <br /> & communications
          </span>
        </a>
        <div className={s.header__navigation}>
          <HeaderNavigation />
        </div>
        <a className={s.header__project}>обсудить проект</a>
      </div>
    </header>
  )
}
