import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import {
  GetFavorsDocument,
  GetFavorInput,
  Favor,
} from '../../generated/graphql'

import { client } from '../../utils/createApolloClient'
import { favorsProperties } from '../../constants/constants'
import { validateQueryParams } from '../../utils/utils'
import {
  FavorsList,
  Navbar,
  FavorSearch,
  BottomNav,
} from '../../components/modules'
import { colorPalette } from '../../constants/constants'
import { Background } from '../../components/elements/Background.styled'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = validateQueryParams(context.query, favorsProperties)
  console.log(data)

  const res = await client.query({
    query: GetFavorsDocument,
    variables: { data },
  })

  if (!res.data?.getFavors) return { notFound: true }

  return { props: { favors: res.data.getFavors, data } }
}
interface FavorsListPageProps {
  favors: Favor[]
  data: GetFavorInput
}

const FavorsPage: NextPage<FavorsListPageProps> = ({ favors, data }) => {
  console.log(favors)
  console.log(data)
  return (
    <>
      <Background color={colorPalette.green} />
      <Navbar
        title="Favor"
        titleColor={colorPalette.yellow}
        link="/favors"
        backButton={false}
        settingsButton={false}
      />
      <FavorSearch input={data} />
      <FavorsList favorsData={favors} />
      <BottomNav />
    </>
  )
}

export default FavorsPage
