import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'

import '@/styles/global.scss'

SwiperCore.use([Autoplay])

const LedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default LedApp
