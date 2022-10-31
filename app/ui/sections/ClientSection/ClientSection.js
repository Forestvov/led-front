import cn from 'classnames'
import React from 'react'

import { ClientSectionCanvas, ClientSectionSlider } from '@/ui/index'

import s from './ClientSection.module.scss'

export const ClientSection = () => {
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
              <div className={s.clients__icon}>
                <img src='/moc/clients/forbes.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/коммерсант.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/rbk.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/inc.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/habr.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/canews.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/rusbase.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/secret.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/vogue.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/vedomost.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/vc.svg' alt='' />
              </div>
              <div className={s.clients__icon}>
                <img src='/moc/clients/rgru.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientSectionSlider />
    </section>
  )
}
