import cn from 'classnames'
import React, { useEffect } from 'react'

import { ClientSectionCanvas, ClientSectionSlider } from '@/ui/index'

import Magnetic from '@/helpers/magnetic'

import s from './ClientSection.module.scss'

const magnificConfig = {
  y: 0.5,
  x: 0.4,
  s: 0.5,
  rs: 1
}

export const ClientSection = ({ clients, reviews }) => {
  useEffect(() => {
    const logoItems = window.document.querySelectorAll('.client__logo_image')
    for (let i = 0; i < logoItems.length; i++) {
      new Magnetic(logoItems[i], magnificConfig)
    }
  }, [])

  return (
    <section className={s.clients}>
      <div className={s.clients__inner}>
        <img className={s.noise} src='/noise.png' alt='' />
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
                  className={cn(s.clients__icon, 'client__logo_image')}
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
