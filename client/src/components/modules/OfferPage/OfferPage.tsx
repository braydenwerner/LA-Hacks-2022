import { useRef, FormEvent, useEffect, useContext } from 'react'
import { colorPalette } from '../../../constants/constants'
import {
  Favor,
  useCreateCommentMutation,
  useGetCommentsLazyQuery,
} from '../../../generated/graphql'
import { Navbar } from '../../modules'
import * as Styled from './OfferPage.styled'
import Image from 'next/Image'
import { useRouter } from 'next/router'
import { TokenContext } from '../../../providers'
import { Button } from '../../elements/Button/Button'
import { FavorCard } from '../../elements/FavorCard/FavorCard'
import { CommentCard } from '../../elements/CommentCard/CommentCard'
import { BottomNav } from '../BottomNav/BottomNav'


interface OfferPageProps {
  favor: Favor
  itemUUID: string
  signedIn: boolean
}

export const OfferPage: React.FC<OfferPageProps> = ({
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

  const handleClick = () => {
    // TODO: PUSH status update
  }

  return (
    <>
      <Styled.Background />
      <Navbar title={`$${favor.price}`} titleColor={colorPalette.green} link={`/favors/${itemUUID}`} backButton={true} settingsButton={false}/>
      <Styled.BodyWrapper>
        <Styled.Text> <span style={{fontWeight: 900}}> {favor.client_id.first_name} {favor.client_id.last_name} </span> has a favor! </Styled.Text>
        <Styled.ImgWrapper>
          <Image 
            src="/profile_img.png"
            width={50}
            height={50}
          />
        </Styled.ImgWrapper>
        <Styled.Card>
            <Styled.Header>
            <Styled.Title> {favor.title} </Styled.Title>
            </Styled.Header>
            <Styled.Separator />
            <Styled.Description>{favor.description}</Styled.Description>
            <Styled.Footer>
                <Styled.FinishBy> Comments({commentsData ? commentsData.length : '0'}) </Styled.FinishBy>
            </Styled.Footer>
        </Styled.Card>
        <Styled.Text> Complete by <b>{favor.finish_by ? favor.finish_by : "whenever"}</b> </Styled.Text>
        <Button text="pick up favor" color={colorPalette.green} callback={handleClick} />
      </Styled.BodyWrapper>
      <BottomNav />
    </>
  )
}
