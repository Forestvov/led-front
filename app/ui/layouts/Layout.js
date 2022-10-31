import NextHead from 'next/head'
import React from 'react'

import { Header } from '@/ui/index'

export const Layout = ({ title, description, children }) => {
  return (
    <>
      <NextHead>
        <meta charSet='UTF-8' />
        <title>{title ? title : 'LED'}</title>
        {description && <meta name='description' content={description} />}
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
        />
      </NextHead>
      <Header />
      {children}
      {/*<Footer />*/}
    </>
  )
}
