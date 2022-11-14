import React from 'react'
import { Link } from 'react-scroll'

import { links } from '@/data/links'

import s from './HeaderNavigation.module.scss'

export const HeaderNavigation = () => {
  return (
    <nav className={s.navigation}>
      {links.map(({ id, title, circle }) => (
        <Link to={id} spy={true} key={id} smooth={true}>
          <span className={s.navigation_title}>
            <span data-text={title}>{title}</span>
          </span>
          {circle ? <i className={s.icon} /> : null}
        </Link>
      ))}
    </nav>
  )
}
