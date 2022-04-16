import Head from 'next/head'
import { NextPage } from 'next'

import { Navbar } from '../../components/modules'

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products - DailyTechSupply</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>Products Page</div>
    </>
  )
}

export default ProductsPage
