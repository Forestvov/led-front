import React from 'react'
import { Link } from 'react-scroll'

import s from './HeaderNavigation.module.scss'

const links = [
  { id: 'about', title: 'о компании' },
  { id: 'service', title: 'услуги', circle: true },
  { id: 'media', title: 'сми' },
  { id: 'reviews', title: 'отзывы' },
  { id: 'clients', title: 'клиенты' },
  { id: 'team', title: 'команда' },
  { id: 'faq', title: 'faq' }
]

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
