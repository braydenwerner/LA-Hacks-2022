import { useEffect, useState } from 'react'
import { User } from '../../../generated/graphql'
import { BottomNav } from '../BottomNav/BottomNav'
import Image from 'next/image'
import * as Styled from './UserProfile.styled'
import { colorPalette } from '../../../constants/constants'
import { Background } from '../../elements/Background.styled'
import { SpringModal } from '../../elements'

interface UserProfileProps {
  user: User
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [selectMode, setSelectMode] = useState('favors')

  useEffect(() => {}, [])

  return (
    <Styled.ProfileContainer>
      <BottomNav />
      <Background color={colorPalette.orange} />
      <Styled.Selector>
        <Styled.SelectorText selected={selectMode === 'favors'} onClick={() => setSelectMode('favors')}>
          favors
        </Styled.SelectorText>
        <Styled.SelectorText selected={selectMode === 'friends'} onClick={() => setSelectMode('friends')}>
          friends
        </Styled.SelectorText>
      </Styled.Selector>
      <Styled.InnerContainer>
        {selectMode === 'favors' ? 
        (
          <>
            <Styled.NameText>
              {user.first_name + ' ' + user.last_name}
            </Styled.NameText>
            <Styled.GreenText>
              $0 Earned
            </Styled.GreenText>
            <Image src="/profile_img.png" width={100} height={100} />
            <Styled.GreenText>
              1 completed, 1 asked
            </Styled.GreenText>
            <Styled.SmallText> Favor History </Styled.SmallText>
            <Styled.Card>
              <Styled.Description> <b> Prateek Sane </b> picked up your food. </Styled.Description>
              <Styled.Price color={colorPalette.redOrange}> -$10 </Styled.Price>
            </Styled.Card>
            <Styled.Card>
              <Styled.Description> You purchased <b> Saim </b> groceries. </Styled.Description>
              <Styled.Price color={colorPalette.green}> +$10 </Styled.Price>
            </Styled.Card>
          </>
        ) : 
        (
          <>
            <Styled.GreenText marginTop="38px" > Your Friends </Styled.GreenText>
            <Styled.Card>
              <Image src='/profile_img.png' width={40} height={40} />
              <Styled.Title> Aiden Szeto </Styled.Title>
              <Image src='/Cancel.svg' width={40} height={40} />
            </Styled.Card>
            <Styled.Card>
              <Image src='/profile_img.png' width={40} height={40} />
              <Styled.Title> Prateek Sane </Styled.Title>
              <Image src='/Cancel.svg' width={40} height={40} />
            </Styled.Card>
            <Styled.Card>
              <Image src='/profile_img.png' width={40} height={40} />
              <Styled.Title> Marina Suh </Styled.Title>
              <Image src='/Cancel.svg' width={40} height={40} />
            </Styled.Card>
            <Styled.Card>
              <Image src='/profile_img.png' width={40} height={40} />
              <Styled.Title> Brayden Werner </Styled.Title>
              <Image src='/Cancel.svg' width={40} height={40} />
            </Styled.Card>
          </>
        )
        }
      </Styled.InnerContainer>
    </Styled.ProfileContainer>
  )
}
