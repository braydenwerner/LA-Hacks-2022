import { useRef, FormEvent, useEffect, useContext } from 'react'
import { colorPalette } from '../../../constants/constants'
import {
  Favor,
  useCreateCommentMutation,
  useGetCommentsLazyQuery,
} from '../../../generated/graphql'
import { Navbar } from '../../modules'
import * as Styled from './CommentPage.styled'
import { FavorCard } from '../FavorCard/FavorCard'
import { CommentCard } from '../CommentCard/CommentCard'
import { useRouter } from 'next/router'
import { TokenContext } from '../../../providers'
import Image from 'next/image'

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

  const router = useRouter()
  const { isMounted, tokenAttached, userData } = useContext(TokenContext)
  console.log(isMounted)
  console.log('tokenattached:' + tokenAttached)
  if (isMounted && !tokenAttached) router.push('/signup')

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

  const commentPlaceholder = userData
    ? `Comment as ${userData.first_name}...`
    : 'Submit a comment...'

  return (
    <>
      <Navbar
        title={`$${favor.price}`}
        titleColor={colorPalette.green}
        link="/products"
        backButton={true}
        settingsButton={false}
      />
      <Styled.BodyWrapper>
        <Styled.Title>
          {' '}
          <span style={{ fontWeight: 900 }}>
            {' '}
            {favor.client_id.first_name} {favor.client_id.last_name}{' '}
          </span>{' '}
          has a favor!{' '}
        </Styled.Title>
        <Styled.ImgWrapper>
          <Image src="/profile_img.png" width={50} height={50} />
        </Styled.ImgWrapper>
        <FavorCard favor={favor} bigView={false} />
        {signedIn ? (
          <Styled.CreateCommentWrapper>
            <form onSubmit={handleSubmit}>
              <Styled.TextArea
                ref={textRef}
                placeholder={commentPlaceholder}
              ></Styled.TextArea>
              <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
            </form>
          </Styled.CreateCommentWrapper>
        ) : (
          "You are not signed in so you can't make a comment"
        )}
        {commentsData &&
          commentsData.map((comment, i) => (
            <CommentCard comment={comment} key={i} />
          ))}
      </Styled.BodyWrapper>
    </>
  )
}
