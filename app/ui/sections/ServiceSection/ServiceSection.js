import cn from 'classnames'
import React, { useRef, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import StickyBox from 'react-sticky-box'

import { CircleArrowIcon, CircleIcon, ServiceCard, SpinIcon } from '@/ui/index'

import useWindowSize from '@/hooks/useWindowSize'

import s from './ServiceSection.module.scss'

export const ServiceSection = props => {
  const { ctxBlock, textUsUrl, briefUrl, services } = props

  const [showPer, setShowPer] = useState(6)
  const showreelCursorRef = useRef(null)

  const { width } = useWindowSize()

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

  const lengthCutArr = services.slice(6).length

  const moveShowreelCursor = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const iconHeightHalf = showreelCursorRef.current.offsetHeight / 2
    const iconWidthHalf = showreelCursorRef.current.offsetWidth / 2
    showreelCursorRef.current.style.left =
      e.clientX - rect.x - iconWidthHalf + 'px'
    showreelCursorRef.current.style.top =
      e.clientY - rect.y - iconHeightHalf + 'px'
  }

  return (
    <section id='service' className={s.service}>
      <div className={cn('container', s.service__container)}>
        <StickyBox className={s.service__sticky}>
          <div className={s.service__left}>
            <h2
              className={s.service__title}
              dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
            />
            <div
              className={s.service__text}
              dangerouslySetInnerHTML={{ __html: ctxBlock.description }}
            />
            <a
              className={s.service__brif}
              href={briefUrl}
              target='_blank'
              rel='noreferrer'
            >
              Заполнить бриф
            </a>
          </div>
        </StickyBox>
        <div className={cn(s.service__right, 'service__cards')}>
          <div className={s.service__right_inner}>
            <div
              className={s.service__hovers}
              onMouseMove={e => width > 1023 && moveShowreelCursor(e)}
            >
              <div className={s.service__mouse__icon} ref={showreelCursorRef}>
                <div className={s.service__mouse__icon_text}>
                  <CircleIcon />
                </div>
                <div className={s.service__mouse__icon_play}>
                  <CircleArrowIcon />
                </div>
              </div>
              <div className={s.service__cards}>
                {services.slice(0, 6).map((card, idx) => (
                  <ServiceCard
                    textUsUrl={textUsUrl}
                    position={setPosition(idx + 1, showPer)}
                    key={idx}
                    number={idx + 1}
                    {...card}
                  />
                ))}
              </div>
              <AnimateHeight height={showPer === 6 ? 0 : 'auto'}>
                <div className={s.service__cards}>
                  {services.slice(6).map((card, idx) => (
                    <ServiceCard
                      textUsUrl={textUsUrl}
                      position={setPositionOther(idx + 1, lengthCutArr)}
                      key={7 + idx}
                      number={7 + idx}
                      {...card}
                    />
                  ))}
                </div>
              </AnimateHeight>
            </div>
          </div>
          <AnimateHeight height={showPer === services.length ? 0 : 'auto'}>
            <button
              className={s.service__more}
              onClick={() => setShowPer(services.length)}
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
