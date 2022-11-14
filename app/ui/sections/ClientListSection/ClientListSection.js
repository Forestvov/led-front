import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'

import { ClientListItem } from '@/ui/index'

import useWindowSize from '@/hooks/useWindowSize'

import s from './ClientListSection.module.scss'

export const ClientListSection = ({ ctxBlock, clients }) => {
  const [showAll, setShowAll] = useState(false)
  const [count, setCount] = useState(8)

  const { width } = useWindowSize()

  useEffect(() => {
    if (width <= 1023) {
      setCount(6)
    } else {
      setCount(8)
    }
  }, [width])

  return (
    <section id='clients' className={s.list}>
      <div className={cn('container', s.list__inner)}>
        <h2
          className={s.list__title}
          dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
        />
        <div className={cn(s.list__items, 'list__items')}>
          {clients.slice(0, count).map((client, idx) => (
            <ClientListItem client={client} delay={idx} key={idx} />
          ))}
        </div>
        <AnimateHeight height={showAll ? 'auto' : 0}>
          <div className={s.list__items}>
            {clients.slice(count, clients.length).map((client, idx) => (
              <ClientListItem delay={idx} client={client} key={idx} />
            ))}
          </div>
        </AnimateHeight>
        {clients.length > count ? (
          <AnimateHeight height={showAll ? 0 : 'auto'}>
            <button onClick={() => setShowAll(true)} className={s.list__more}>
              Показать всех клиентов
            </button>
          </AnimateHeight>
        ) : null}
      </div>
    </section>
  )
}
