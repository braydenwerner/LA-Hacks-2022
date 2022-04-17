import { Comment } from "../../../generated/graphql"
import * as Styled from './CommentCard.styled'

interface CommentCardInterface {
    comment: any
}

export const CommentCard : React.FC<CommentCardInterface> = ({comment}) => {
    return(
        <Styled.Card>
            <Styled.Header>
                <Styled.Title> {comment.user_id.first_name} + {comment.user_id.last_name} </Styled.Title>
            </Styled.Header>
            <Styled.Description>{comment.text}</Styled.Description>
        </Styled.Card>
    )
}