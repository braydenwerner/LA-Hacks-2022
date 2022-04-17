import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { CreateFavor } from '../components/modules'
import { TokenContext } from '../providers'

const CreateFavorPage: NextPage = () => {
  const router = useRouter()
  const { isMounted, tokenAttached } = useContext(TokenContext)
  console.log(isMounted)
  console.log('tokenattached:' + tokenAttached)
  if (isMounted && !tokenAttached) router.push('/signup')

  return <CreateFavor />
}

export default CreateFavorPage
