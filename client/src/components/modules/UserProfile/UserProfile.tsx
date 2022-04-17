import { useEffect, useState } from 'react'
import { User } from '../../../generated/graphql'
import { BottomNav } from '../BottomNav/BottomNav'
import Image from 'next/image'
import * as Styled from './UserProfile.styled'

interface UserProfileProps {
  user: User
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [selectMode, setSelectMode] = useState('favors')

  useEffect(() => {}, [])

  return (
    <Styled.ProfileContainer>
      <div style={{ height: '220px' }}></div>
      <Styled.NameText>
        {user.first_name + ' ' + user.last_name}
      </Styled.NameText>
      <Styled.UnderLine></Styled.UnderLine>
      <Image src="/profile_img.png" width={200} height={170} />
      <BottomNav />
      <Styled.Selector>
        <Styled.SelectorText onClick={() => setSelectMode('favors')}>
          Favors
        </Styled.SelectorText>
        <Styled.SelectorText onClick={() => setSelectMode('friends')}>
          Friends
        </Styled.SelectorText>
      </Styled.Selector>

      {selectMode === 'favors' ? <div>favors</div> : <div>friends</div>}
    </Styled.ProfileContainer>
  )
}
