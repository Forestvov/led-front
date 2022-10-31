import cn from 'classnames'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import s from './ExperienceSection.module.scss'

export const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={s.experience}>
      <div className={cn('container', s.experience__body)}>
        <h2 className={s.experience__title}>
          10 лет опыта и более сотни успешных кейсов
        </h2>
        <div className={s.experience__inner}>
          <div className={s.experience__image}>
            <img src='/moc/experience.jpg' alt='Полина Тараненко' />
          </div>
          <div className={s.experience__info}>
            <div className={s.experience__info_position}>
              Основатель PR-агентства LED
            </div>
            <div className={s.experience__info_name}>Полина Тараненко</div>
            <div className={s.experience__info_description}>
              Эксперт по PR и маркетинговым коммуникациям. Начинала карьеру в
              экономической и международной журналистике (ИТАР-ТАСС, Finam FM).
              {isOpen ? null : (
                <>
                  {' '}
                  <button
                    className={s.experience__info_more}
                    onClick={() => setIsOpen(true)}
                  >
                    Читать далее
                  </button>
                </>
              )}
              <AnimateHeight height={isOpen ? 'auto' : 0}>
                Эксперт по PR и маркетинговым коммуникациям. Начинала карьеру в
                экономической и международной журналистике (ИТАР-ТАСС, Finam
                FM). Эксперт по PR и маркетинговым коммуникациям. Начинала
                карьеру в экономической и международной журналистике (ИТАР-ТАСС,
                Finam FM). Эксперт по PR и маркетинговым коммуникациям. Начинала
                карьеру в экономической и международной журналистике (ИТАР-ТАСС,
                Finam FM).
              </AnimateHeight>
            </div>

            <a className={s.experience__info_link}>Обсудить проект</a>
          </div>
        </div>
      </div>
    </section>
  )
}
