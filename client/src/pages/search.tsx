import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Search } from '../components/elements'
import { TokenContext } from '../providers'

const SearchPage: NextPage = () => {
  const router = useRouter()
  const { isMounted, tokenAttached, userData } = useContext(TokenContext)
  if (isMounted && !tokenAttached) router.push('/signup')

  return (
    <div>
      <Head>
        <title>Search</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
    </div>
  )
}

export default SearchPage
