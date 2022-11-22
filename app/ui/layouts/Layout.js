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
    presentation,
    presentationSize,
    briefUrl
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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/fav/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/fav/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/fav/favicon-16x16.png'
        />
        <link rel='manifest' href='/fav/site.webmanifest' />
      </NextHead>
      <Header discussProjectUrl={discussProjectUrl} />
      {children}
      <Footer
        briefUrl={briefUrl}
        presentationSize={presentationSize}
        email={email}
        presentation={presentation}
      />
    </>
  )
}
