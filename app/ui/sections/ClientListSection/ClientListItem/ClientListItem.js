import cn from 'classnames'
import React from 'react'
import IsVisible from 'react-is-visible'

import s from './ClientListItem.module.scss'

export const ClientListItem = ({ client, delay }) => {
  return (
    <IsVisible once>
      {isVisible => (
        <div className={cn(s.item, 'item-logo-client')}>
          <div className={s.item__image}>
            <img
              className={isVisible ? s.show : ''}
              style={{ transitionDelay: `0.${delay}s` }}
              src={client.images.image}
              alt={client.name}
            />
          </div>
          <svg
            className={cn(s.item__outline, {
              [s.hidden]: !isVisible,
              [s.active]: isVisible
            })}
            width='385'
            height='386'
            viewBox='0 0 385 386'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M384.5 193C384.5 299.316 298.537 385.5 192.5 385.5C86.4625 385.5 0.5 299.316 0.5 193C0.5 86.684 86.4625 0.5 192.5 0.5C298.537 0.5 384.5 86.684 384.5 193Z'
              stroke='#E5EAEF'
              style={{
                strokeDasharray: '1223.2, 2446.4',
                strokeDashoffset: '1223.2'
              }}
            />
          </svg>
        </div>
      )}
    </IsVisible>
  )
}
