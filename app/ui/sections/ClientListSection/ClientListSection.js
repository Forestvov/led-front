import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { ClientListItem } from '@/ui/index'

import s from './ClientListSection.module.scss'

const items = [
  '/moc/clientList/mts.svg',
  '/moc/clientList/pick.svg',
  '/moc/clientList/krok.svg',
  '/moc/clientList/ingute.svg',
  '/moc/clientList/telfin.svg',
  '/moc/clientList/goznak.svg',
  '/moc/clientList/dhr.svg',
  '/moc/clientList/producstar.svg',
  '/moc/clientList/goznak.svg',
  '/moc/clientList/pick.svg',
  '/moc/clientList/krok.svg',
  '/moc/clientList/ingute.svg',
  '/moc/clientList/telfin.svg',
  '/moc/clientList/goznak.svg',
  '/moc/clientList/dhr.svg',
  '/moc/clientList/mts.svg'
]

export const ClientListSection = () => {
  const [showAll, setShowAll] = useState(false)
  return (
    <section id='clients' className={s.list}>
      <div className={cn('container', s.list__inner)}>
        <h2 className={s.list__title}>
          Работаем с крупными компаниями в разных отраслях и помогаем им
          оставаться в информационном поле
        </h2>
        <div className={s.list__items}>
          {items.slice(0, 8).map((item, idx) => (
            <ClientListItem icon={item} key={idx} />
          ))}
        </div>
        <AnimateHeight height={showAll ? 'auto' : 0}>
          <div className={s.list__items}>
            {items.slice(8, items.length).map((item, idx) => (
              <ClientListItem icon={item} key={idx} />
            ))}
          </div>
        </AnimateHeight>
        <AnimateHeight height={showAll ? 0 : 'auto'}>
          <button onClick={() => setShowAll(true)} className={s.list__more}>
            Показать всех клиентов
          </button>
        </AnimateHeight>
      </div>
    </section>
  )
}
