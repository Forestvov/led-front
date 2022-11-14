import NextHead from 'next/head'
import React from 'react'

import { Footer, Header } from '@/ui/index'

export const Layout = props => {
  const {
    title,
    description,
    keywords,
    children,
    discussProjectUrl,
    email,
    presentation
  } = props

  return (
    <>
      <NextHead>
        <meta charSet='UTF-8' />
        <title>{title ? title : 'LED'}</title>
        {description && <meta name='description' content={description} />}
        {keywords && <meta name='Keywords' content={keywords} />}
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
        />
      </NextHead>
      <Header discussProjectUrl={discussProjectUrl} />
      {children}
      <Footer email={email} presentation={presentation} />
    </>
  )
}
