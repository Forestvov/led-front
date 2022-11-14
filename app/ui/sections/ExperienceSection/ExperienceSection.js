import cn from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import s from './ExperienceSection.module.scss'

export const ExperienceSection = ({ content, discussProjectUrl, image }) => {
  const { firstTitle, shortDescription, name, description, fullDescription } =
    content

  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={s.experience}>
      <div className={cn('container', s.experience__body)}>
        <h2 className={s.experience__title}>{firstTitle}</h2>
        <div className={s.experience__inner}>
          <div className={s.experience__image}>
            <Image
              src={image}
              blurDataURL={image}
              width={423}
              height={527}
              alt={name}
            />
            <div className={cn(s.experience__info, s.mobile)}>
              <div
                className={s.experience__info_position}
                dangerouslySetInnerHTML={{ __html: shortDescription }}
              />
              <div className={s.experience__info_name}>{name}</div>
            </div>
          </div>
          <div className={s.experience__info}>
            <div className={s.desktop}>
              <div
                className={s.experience__info_position}
                dangerouslySetInnerHTML={{ __html: shortDescription }}
              />
              <div className={s.experience__info_name}>{name}</div>
            </div>
            <div className={s.experience__info_description}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              {isOpen
                ? null
                : fullDescription !== null && (
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
              {fullDescription !== null && (
                <AnimateHeight height={isOpen ? 'auto' : 0}>
                  <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
                </AnimateHeight>
              )}
            </div>

            <a
              className={s.experience__info_link}
              href={discussProjectUrl}
              target='_blank'
              rel='noreferrer'
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
