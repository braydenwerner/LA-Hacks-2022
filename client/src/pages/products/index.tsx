import Head from 'next/head'
import { NextPage } from 'next'

import { Navbar } from '../../components/modules'
import { colorPalette } from '../../constants/constants'

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        backButton={false}
        link=""
        title="Favor"
        hasLink={false}
        settingsButton={false}
        titleColor={colorPalette.yellow}
      />
      <div>Products Page</div>
    </>
  )
}

export default ProductsPage
