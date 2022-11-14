import cn from 'classnames'
import React from 'react'

import { FaqItem } from '@/ui/index'

import s from './FaqSection.module.scss'

export const FaqSection = props => {
  const { ctxBlock, askQuestionUrl, questions } = props
  return (
    <section id='faq' className={s.faq}>
      <div className={cn('container', s.faq__container)}>
        <div className={s.faq__body}>
          <div className={s.faq__left}>
            <h2
              className={s.faq__title}
              dangerouslySetInnerHTML={{ __html: ctxBlock.title }}
            />
            <a
              className={s.faq__link}
              href={askQuestionUrl}
              target='_blank'
              rel='noreferrer'
            >
              Задайте нам вопрос
            </a>
          </div>
          <div className={s.faq__right}>
            {questions.map((question, idx) => (
              <FaqItem {...question} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
