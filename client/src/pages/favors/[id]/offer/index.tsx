import { useCallback, useContext, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GetFavorByIdDocument, GetFavorsDocument, Favor } from '../../../../generated/graphql'

import { client } from '../../../../utils/createApolloClient'
import { ItemView, Navbar } from '../../../../components/modules'
import { ItemProperties } from '../../../../types'
import { CommentPage } from '../../../../components/elements/CommentPage/CommentPage'
import { TokenContext } from '../../../../providers'
import { OfferPage } from '../../../../components/modules/OfferPage/OfferPage'

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await client.query({
      query: GetFavorsDocument,
    })
  
    const data: Favor[] = res.data?.getFavors
    let uuids: string[] = []
    if (data) uuids = data.map((favor) => favor.uuid)
  
    const paths = uuids.map((uuid) => {
      return {
        params: { id: uuid },
      }
    })

    console.log(paths)
  
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params
  
    if (!params?.id) return { notFound: true }
  
    const res = await client.query({
      query: GetFavorByIdDocument,
      variables: { uuid: params.id },
    })
  
    if (!res.data?.getFavorByUUID) return { notFound: true }
  
    return { props: { uuid: params.id, favor: res.data.getFavorByUUID } }
}

interface FavorItemProps {
    uuid: string
    favor: Favor
}

const FavorItemPage: NextPage<FavorItemProps> = ({ uuid, favor }) => {
    const { userData } = useContext(TokenContext)
  
    return (
      <>
        <OfferPage favor={favor} itemUUID={uuid} signedIn={!!userData} /> 
      </>
    )
}

export default FavorItemPage

