import {useRouter} from 'next/router'
import { Favor } from '../../../generated/graphql'
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
            <Styled.Card key={i} onClick={() => router.push('/favors/' + favor.uuid + '')}>
                <Styled.Header>
                  <Styled.Title> {favor.title} <span style={{fontSize: '13px', fontStyle: 'italic'}}> by </span> {favor.finish_by ? favor.finish_by : "whenever"} </Styled.Title>
                  <Styled.Price> ${favor.price} </Styled.Price>
                </Styled.Header>
                <Styled.Separator />
                <Styled.Description>{favor.description}</Styled.Description>
                <Styled.Footer>
                  <Styled.Name> {favor.client_id.first_name} {favor.client_id.last_name} </Styled.Name>
                  <Styled.FinishBy> Comments({"TODO"}) </Styled.FinishBy>
                </Styled.Footer>
            </Styled.Card>
        ))}
    </Styled.ListWrapper>
  )
}
