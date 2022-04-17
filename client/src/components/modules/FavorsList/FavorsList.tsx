import {useRouter} from 'next/router'
import { Favor, useGetCommentsLazyQuery } from '../../../generated/graphql'
import { FavorCard } from '../../elements/FavorCard/FavorCard'
import * as Styled from './FavorList.styled'

interface FavorsListProps {
  favorsData: Favor[]
}

export const FavorsList: React.FC<FavorsListProps> = ({ favorsData }) => {

console.log(favorsData)
const router = useRouter()

  return (
    <Styled.ListWrapper>
        {favorsData.map((favor, i) => (
          <FavorCard favor={favor} bigView={true} key={i} />
        ))}
    </Styled.ListWrapper>
  )
}
