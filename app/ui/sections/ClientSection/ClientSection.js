import cn from 'classnames'
import React from 'react'

import { ClientSectionCanvas, ClientSectionSlider } from '@/ui/index'

import s from './ClientSection.module.scss'

export const ClientSection = ({ clients, reviews }) => {
  return (
    <section className={s.clients}>
      <div className={s.clients__inner}>
        <ClientSectionCanvas
          firstColor='#C727FFFF'
          secondColor='#D167F6B2'
          position='left'
        />
        <ClientSectionCanvas
          firstColor='#363EF8B2'
          secondColor='#1218D3B2'
          position='right'
        />
        <div className={cn(s.clients__circle, s.clients__circle_left)} />
        <div className={cn(s.clients__circle, s.clients__circle_right)} />
        <div className={cn('container', s.clients__container)}>
          <div className={s.clients__content}>
            <h2 className={s.clients__title}>
              О наших клиентах пишут самые известные федеральные СМИ
            </h2>
            <div className={s.clients__items}>
              {clients.map((client, idx) => (
                <a
                  key={idx}
                  href={client.link}
                  target='_blank'
                  className={s.clients__icon}
                  rel='noreferrer'
                >
                  <img src={client.image} alt={client.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {reviews.length > 0 ? <ClientSectionSlider slides={reviews} /> : null}
    </section>
  )
}
