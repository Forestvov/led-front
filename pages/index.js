import React from 'react'

import { Home } from '@/pages/Home'

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API + '/main')
  const data = await res.json()

  return { props: { data } }
}

const HomePage = ({ data }) => {
  return <Home {...data} />
}

export default HomePage
