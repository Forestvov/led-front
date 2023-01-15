import cn from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

import { CircleArrow, DownloadPdfIcon, LogoIcon } from '@/ui/index'

import { getTypeFile } from '@/helpers/getTypeFile'
import { getYear } from '@/helpers/getYear'

import { links } from '@/data/links'

import s from './Footer.module.scss'

export const Footer = props => {
  const { email, presentation, briefUrl, presentationSize } = props

  return (
    <footer className={s.footer}>
      <div className={'container'}>
        <div className={cn(s.footer__row, s.first__row)}>
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
          <div className={s.mobile}>
            <a
              className={s.footer__brief}
              href={briefUrl}
              target='_blank'
              rel='noreferrer'
            >
              <i className={s.footer__brief_icon}>
                <CircleArrow />
              </i>
              заполнить бриф
            </a>
            {presentation && (
              <a
                className={s.footer__pdf}
                href={presentation}
                target='_blank'
                download={true}
                rel='noreferrer'
              >
                <i className={s.footer__pdf_icon}>
                  <DownloadPdfIcon />
                  <DownloadPdfIcon />
                </i>
                <div className={s.footer__pdf_info}>
                  скачать презентацию
                  <div className={s.footer__pdf_size}>
                    {getTypeFile(presentation)}, {Math.floor(presentationSize)}{' '}
                    MB
                  </div>
                </div>
              </a>
            )}
          </div>
          <div className={cn(s.footer__col, s.footer__contacts)}>
            <div className={s.footer__email}>
              <div className={s.footer__email_label}>Наша почта</div>
              <a className={s.footer__email_link} href={`mailto:${email}`}>
                <span>{email}</span>
              </a>
            </div>
            <div className={s.desktop}>
              <a
                className={s.footer__brief}
                href={briefUrl}
                target='_blank'
                rel='noreferrer'
              >
                <i className={s.footer__brief_icon}>
                  <CircleArrow />
                </i>
                заполнить бриф
              </a>
              {presentation && (
                <a
                  className={s.footer__pdf}
                  href={presentation}
                  target='_blank'
                  download={true}
                  rel='noreferrer'
                >
                  <i className={s.footer__pdf_icon}>
                    <DownloadPdfIcon />
                    <DownloadPdfIcon />
                  </i>
                  <div className={s.footer__pdf_info}>
                    скачать презентацию
                    <div className={s.footer__pdf_size}>
                      {getTypeFile(presentation)},{' '}
                      {Math.floor(presentationSize)} MB
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={cn(s.footer__row, s.footer__bottom)}>
          <div className={s.footer__col}>все права защищены © {getYear()}</div>
          <div className={s.footer__col}>
            <a href='https://housevl.ru/' target='_blank' rel='noreferrer'>
              <span>разработка сайта - digital-агентство House</span>
            </a>
          </div>
          {/*<div className={s.footer__col}>*/}
          {/*  <a>политика конфиденциальности</a>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  )
}
