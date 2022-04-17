import { useRouter } from 'next/router'
import { Favor } from '../../../generated/graphql'
import * as Styled from './FavorCard.styled'


interface FavorCardInterface { 
    favor: Favor
    bigView: boolean
}

export const FavorCard : React.FC<FavorCardInterface> = ({favor, bigView}) => {
    const router = useRouter()

    return (
        <Styled.Card onClick={() => {
            if(bigView) 
                router.push('/favors/' + favor.uuid + '') 
            }}>
            <Styled.Header>
            <Styled.Title> {favor.title} <span style={{fontSize: '13px', fontStyle: 'italic'}}> by </span> {favor.finish_by ? favor.finish_by : "whenever"} </Styled.Title>
            {bigView && (
                <Styled.Price> ${favor.price} </Styled.Price>
            )}
            </Styled.Header>
            <Styled.Separator />
            <Styled.Description>{favor.description}</Styled.Description>
            {bigView && (
            <Styled.Footer>
                <Styled.Name> {favor.client_id.first_name} {favor.client_id.last_name} </Styled.Name>
                <Styled.FinishBy> Comments({"TODO"}) </Styled.FinishBy>
            </Styled.Footer>
            )}
        </Styled.Card>
    )
}