import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'

import { client } from '../utils/createApolloClient'
import { TokenProvider } from '../providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DailyTechSupply</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <ApolloProvider client={client}>
        <TokenProvider>
          <div id="modal-portal"></div>
          <Component {...pageProps} />
        </TokenProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
