import { useRef, FormEvent, useEffect, useContext } from 'react'
import { colorPalette } from '../../../constants/constants'
import {
  Favor,
  useCreateCommentMutation,
  useGetCommentsLazyQuery,
} from '../../../generated/graphql'
import { BottomNav, Navbar } from '../../modules'
import * as Styled from './CommentPage.styled'
import { FavorCard } from '../FavorCard/FavorCard'
import { CommentCard } from '../CommentCard/CommentCard'
import { useRouter } from 'next/router'
import { TokenContext } from '../../../providers'
import { Button } from '../Button/Button'

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
      if(textRef.current.value.length === 0) return
      const res = await createCommentMutation({
        variables: { item_uuid: itemUUID, text: textRef.current.value },
      })
      await getComments()

      textRef.current.value = ''
    }
  }

<<<<<<< HEAD
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
=======
  const handleClick = () => {
    router.push('/favors/' + itemUUID + '/offer/')
  }

  const commentPlaceholder = userData ? (`Comment as ${userData.first_name}...`) : 'Submit a comment...'

  return (
    <>
      <Styled.Background />
      <Navbar title={`$${favor.price}`} titleColor={colorPalette.green} link='/favors' backButton={true} settingsButton={false}/>
>>>>>>> d8e69ace728c0dfa23feb9f6440e016b1142ae80
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
<<<<<<< HEAD
            <form onSubmit={handleSubmit}>
              <Styled.TextArea
                ref={textRef}
                placeholder={commentPlaceholder}
              ></Styled.TextArea>
=======
            <Styled.Form onSubmit={handleSubmit}>
              <Styled.TextArea ref={textRef} placeholder={commentPlaceholder}></Styled.TextArea>
>>>>>>> d8e69ace728c0dfa23feb9f6440e016b1142ae80
              <Styled.SubmitButton type="submit">Submit</Styled.SubmitButton>
            </Styled.Form>
          </Styled.CreateCommentWrapper>
        ) : (
          "You are not signed in so you can't make a comment"
        )}
        {commentsData &&
          commentsData.map((comment, i) => (
            <CommentCard comment={comment} key={i} />
<<<<<<< HEAD
          ))}
=======
        ))}

        <Button text="favor details" color={colorPalette.redOrange} callback={handleClick} />
>>>>>>> d8e69ace728c0dfa23feb9f6440e016b1142ae80
      </Styled.BodyWrapper>
      <BottomNav />
    </>
  )
}
