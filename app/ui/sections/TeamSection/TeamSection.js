import cn from 'classnames'
import Image from 'next/image'
import React from 'react'

import s from './TeamSection.module.scss'

export const TeamSection = () => {
  return (
    <section id='team' className={s.team}>
      <img className={s.team__bg} src='/moc/team/team_bg.jpg' alt='' />
      <div className={cn('container', s.team__body)}>
        <h2 className={s.team__title}>
          Молодая и амбициозная команда специалистов поможет добиться успеха
        </h2>
        <div className={s.team__action}>
          <div className={s.team__action_circle}>
            <Image src='/icons/team__emoji.png' width={90} height={90} />
          </div>
          <a className={s.team__action_link} href=''>
            <span />
            <span />
          </a>
          <div className={s.team__action_icon}>
            <img src='/icons/team__text.svg' alt='поработаем вместе?' />
          </div>
        </div>
      </div>
    </section>
  )
}
