import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import StickyBox from 'react-sticky-box'

import { ServiceCard, SpinIcon } from '@/ui/index'

import s from './ServiceSection.module.scss'

const cards = [
  {
    icon: '/moc/icons/icon-1.svg',
    title: 'Разработка PR стратегий',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#FAC7EE',
    colorSecond: '#FFE7FC'
  },
  {
    icon: '/moc/icons/icon-2.svg',
    title: 'Комплексное PR сопровождение',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#CCB0FA',
    colorSecond: '#E5D7FF'
  },
  {
    icon: '/moc/icons/icon-3.svg',
    title: 'Мониторинг и аналитика',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#BAE9F7',
    colorSecond: '#DAFDFF'
  },
  {
    icon: '/moc/icons/icon-4.svg',
    title: 'Продвижение личного бренда',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#FCFCFF',
    colorSecond: '#FCFCFC'
  },
  {
    icon: '/moc/icons/icon-5.svg',
    title: 'PR поддержка HR бренда',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#FAD967',
    colorSecond: '#FFED99'
  },
  {
    icon: '/moc/icons/icon-6.svg',
    title: 'Инвестиционный PR',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#C8E780',
    colorSecond: '#E3FCA2'
  },
  {
    icon: '/moc/icons/icon-1.svg',
    title: 'Разработка PR стратегий',
    text: 'Мы поможем разработать позиционирование, показать ваши преимущества и заявить о себе на подходящих площадках.',
    colorFirst: '#FAC7EE',
    colorSecond: '#FFE7FC'
  }
]

export const ServiceSection = () => {
  const [showPer, setShowPer] = useState(6)

  const setPosition = (idx, lengthArray) => {
    switch (lengthArray % 2) {
      case 0:
        switch (idx) {
          case 1:
            return 'leftTop'
          case 2:
            return 'rightTop'
          case lengthArray - 1:
            return 'bottomLeft'
          case lengthArray:
            return 'bottomRight'
          default:
            return 'center'
        }
      default:
        switch (idx) {
          case 1:
            return 'leftTop'
          case 2:
            return 'rightTop'
          case lengthArray:
            return 'bottomLeft'
          default:
            return 'center'
        }
    }
  }

  const setPositionOther = (idx, lengthArray) => {
    switch (lengthArray) {
      case 1:
        return 'bottomLeft'
      default:
        switch (idx) {
          case lengthArray - 1:
            return 'bottomLeft'
          case lengthArray:
            return 'bottomRight'
          default:
            return 'center'
        }
    }
  }

  const lengthCutArr = cards.slice(6).length

  return (
    <section id='service' className={s.service}>
      <div className={cn('container', s.service__container)}>
        <StickyBox>
          <div className={s.service__left}>
            <h2 className={s.service__title}>Услуги</h2>
            <p className={s.service__text}>
              Готовим и проводим бизнес-мероприятия, строим HR и личный бренд,
              ищем пиарщиков в штат и обучаем их, консультируем и разрабатываем
              PR-стратегию, а также разгоняем ваш рост в рейтингах.
            </p>
            <a className={s.service__brif}>Заполнить бриф</a>
          </div>
        </StickyBox>
        <div className={s.service__right}>
          <div className={s.service__cards}>
            {cards.slice(0, 6).map((card, idx) => (
              <ServiceCard
                position={setPosition(idx + 1, showPer)}
                key={idx}
                number={idx + 1}
                {...card}
              />
            ))}
          </div>
          <AnimateHeight height={showPer === 6 ? 0 : 'auto'}>
            <div className={s.service__cards}>
              {cards.slice(6).map((card, idx) => (
                <ServiceCard
                  position={setPositionOther(idx + 1, lengthCutArr)}
                  key={idx}
                  number={idx + 1}
                  {...card}
                />
              ))}
            </div>
          </AnimateHeight>
          <AnimateHeight height={showPer === cards.length ? 0 : 'auto'}>
            <button
              className={s.service__more}
              onClick={() => setShowPer(cards.length)}
            >
              <i>
                <SpinIcon />
              </i>
              Смотреть все услуги
            </button>
          </AnimateHeight>
        </div>
      </div>
    </section>
  )
}

// background: linear-gradient(180deg, #FAC7EE 0%, #FFE7FC 100%);
