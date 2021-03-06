import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar } from '../components/modules'
import { SplashPage } from '../components/modules'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Favor</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SplashPage/>
      </main>
    </div>
  )
}

export default Home
