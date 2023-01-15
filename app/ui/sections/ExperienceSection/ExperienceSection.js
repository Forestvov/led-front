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
              placeholder='blur'
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
            </div>

            {fullDescription !== null && (
              <AnimateHeight height={isOpen ? 'auto' : 0}>
                <div className={s.experience__info_description}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: fullDescription
                    }}
                  />
                  <>
                    {' '}
                    <button
                      className={s.experience__info_more}
                      onClick={() => setIsOpen(false)}
                    >
                      Свернуть
                    </button>
                  </>
                </div>
              </AnimateHeight>
            )}

            <a
              className={s.experience__info_link}
              href={discussProjectUrl}
              target='_blank'
              rel='noreferrer'
            >
              Обсудить проект
              <svg
                width='18'
                height='15'
                viewBox='0 0 18 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11.1574 1.16973C10.7608 0.776756 10.1182 0.776756 9.72154 1.16973C9.32426 1.56335 9.32426 2.20201 9.72154 2.59562L13.6545 6.49232H1.89089C1.33093 6.49232 0.875 6.94239 0.875 7.5C0.875 8.05761 1.33093 8.50768 1.89089 8.50768H13.6545L9.72154 12.4044C9.32426 12.798 9.32426 13.4367 9.72154 13.8303C10.1182 14.2232 10.7608 14.2232 11.1574 13.8303L16.827 8.21294C17.2243 7.81933 17.2243 7.18067 16.827 6.78706L11.1574 1.16973Z'
                  fill='#191C20'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
