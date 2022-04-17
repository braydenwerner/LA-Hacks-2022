import { useRef, FormEvent, useEffect } from 'react'
import { colorPalette } from '../../../constants/constants'
import {
  Favor,
  useCreateCommentMutation,
  useGetCommentsLazyQuery,
} from '../../../generated/graphql'
import { Navbar } from '../../modules'
import * as Styled from './CommentPage.styled'
import Image from 'next/Image'
import { FavorCard } from '../FavorCard/FavorCard'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentPageProps {
  favor: Favor
  itemUUID: string
  signedIn: boolean
}

export const CommentPage: React.FC<CommentPageProps> = ({
  favor,
  itemUUID,
  signedIn,
}) => {
  const [getComments, { data }] = useGetCommentsLazyQuery({
    variables: { item_uuid: itemUUID },
  })
  const commentsData = data && data.getComments

  const [createCommentMutation] = useCreateCommentMutation()

  useEffect(() => {
    getComments()
  }, [])

  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      itemUUID &&
      textRef &&
      textRef.current &&
      textRef.current.value.length < 50
    ) {
      const res = await createCommentMutation({
        variables: { item_uuid: itemUUID, text: textRef.current.value },
      })
      await getComments()

      textRef.current.value = ''
    }
  }

  return (
    <>
      <Navbar title={`$${favor.price}`} titleColor={colorPalette.green} link='/products' backButton={true} settingsButton={false}/>
      <Styled.BodyWrapper>
        <Styled.Title> <span style={{fontWeight: 900}}> {favor.client_id.first_name} {favor.client_id.last_name} </span> has a favor! </Styled.Title>
        <Styled.ImgWrapper>
          <Image 
            src="/profile_img.png"
            width={50}
            height={50}
          />
        </Styled.ImgWrapper>
        <FavorCard favor={favor} bigView={false} />
        {commentsData &&
          commentsData.map((comment, i) => (
            <CommentCard comment={comment} key={i} />
        ))}
        <div>
          {signedIn ? (
            <div>
              <form onSubmit={handleSubmit}>
                <textarea ref={textRef} placeholder="Enter Comment"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          ) : (
            "You are not signed in so you can't make a comment"
          )}
        </div>
      </Styled.BodyWrapper>
    </>
  )
}
