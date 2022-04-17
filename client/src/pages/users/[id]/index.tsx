import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
  GetUserByIdDocument,
  GetUserIdsDocument,
  User,
} from '../../../generated/graphql'

import { client } from '../../../utils/createApolloClient'
import { BottomNav, Navbar, UserProfile } from '../../../components/modules'
import { colorPalette } from '../../../constants/constants'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.query({
    query: GetUserIdsDocument,
  })

  const data: User[] = res.data?.getUsers
  let uids: string[] = []
  if (data) uids = data.map((user) => user.uid)

  const paths = uids.map((uid) => {
    return {
      params: { id: uid },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params

  if (!params?.id) return { notFound: true }

  const res = await client.query({
    query: GetUserByIdDocument,
    variables: { uid: params.id },
  })

  if (!res.data?.getUserById) return { notFound: true }

  return { props: { user: res.data.getUserById } }
}

interface UserProfileProps {
  user: User
}

const UserProfilePage: NextPage<UserProfileProps> = ({ user }) => {
  return (
    <>
      <Navbar
        backButton={false}
        link={''}
        settingsButton={false}
        title={'Profile'}
        titleColor={colorPalette.charcoal}
      />
      <Head>
        <title>{user.first_name}'s Profile</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfile user={user} />
      <BottomNav />
    </>
  )
}

export default UserProfilePage
