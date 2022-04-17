import { useContext, useEffect, useState } from 'react'
import { useGetUsersQuery, User } from '../../../generated/graphql'
import { BottomNav } from '../BottomNav/BottomNav'
import Image from 'next/image'
import * as Styled from './UserProfile.styled'
import { TokenContext } from '../../../providers'
import { auth } from '../../../config/config'
import { useRouter } from 'next/router'

interface UserProfileProps {
  user: User
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [selectMode, setSelectMode] = useState('favors')

  const { data } = useGetUsersQuery()
  const usersData = data && data.getUsers

  const router = useRouter()
  const { isMounted, tokenAttached, userData } = useContext(TokenContext)
  if (isMounted && !tokenAttached) router.push('/signup')

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

      {selectMode === 'favors' ? (
        <Styled.NameText>
          {user.first_name + ' ' + user.last_name}
        </Styled.NameText>
      ) : (
        <div>friends</div>
      )}
    </Styled.ProfileContainer>
  )
}
