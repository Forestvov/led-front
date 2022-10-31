import cn from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

import { CircleArrow, DownloadPdfIcon, LogoIcon } from '@/ui/index'

import s from './Footer.module.scss'

const links = [
  { id: 'about', title: 'о компании' },
  { id: 'service', title: 'услуги', circle: true },
  { id: 'media', title: 'сми' },
  { id: 'reviews', title: 'отзывы' },
  { id: 'clients', title: 'клиенты' },
  { id: 'team', title: 'команда' },
  { id: 'faq', title: 'faq' }
]

export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={s.footer__row}>
          <div className={cn(s.footer__col, s.footer__logo)}>
            <i className={s.footer__logo_icon}>
              <LogoIcon color='#191C20' />
            </i>
            <p className={s.footer__logo_text}>
              branding, pr <br /> & communications
            </p>
          </div>
          <ul className={cn(s.footer__col, s.footer__navigation)}>
            {links.map((link, idx) => (
              <li key={idx}>
                <Link to={link.id} spy={true} smooth={true}>
                  <span data-text={link.title}>{link.title}</span>
                </Link>
                {link.circle ? <i className={s.icon} /> : null}
              </li>
            ))}
          </ul>
          <div className={cn(s.footer__col, s.footer__contacts)}>
            <div className={s.footer__email}>
              <div className={s.footer__email_label}>Наша почта</div>
              <a
                className={s.footer__email_link}
                href='mailto:agency@ledpr.com'
              >
                agency@ledpr.com
              </a>
            </div>
            <a className={s.footer__brief}>
              <i className={s.footer__brief_icon}>
                <CircleArrow />
              </i>
              Заполнить бриф
            </a>
            <a className={s.footer__pdf}>
              <i className={s.footer__pdf_icon}>
                <DownloadPdfIcon />
              </i>
              <div className={s.footer__pdf_info}>
                загрузить презентацию
                <div className={s.footer__pdf_size}>PDF, 3 MB</div>
              </div>
            </a>
          </div>
        </div>
        <div className={cn(s.footer__row, s.footer__bottom)}>
          <div className={s.footer__col}>все права защищены © {getYear()}</div>
          <div className={s.footer__col}>
            <a href='https://housevl.ru/' target='_blank'>
              разработка сайта - digital-агентство House
            </a>
          </div>
          <div className={s.footer__col}>
            <a>политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
