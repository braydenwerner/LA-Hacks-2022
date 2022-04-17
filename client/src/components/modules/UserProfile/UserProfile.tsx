import { useContext, useEffect, useState } from 'react'
import { useGetUsersQuery, User } from '../../../generated/graphql'
import { BottomNav } from '../BottomNav/BottomNav'
import Image from 'next/image'
import * as Styled from './UserProfile.styled'
import { TokenContext } from '../../../providers'
import { auth } from '../../../config/config'
import router, { useRouter } from 'next/router'

interface UserProfileProps {
  user: User
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [selectMode, setSelectMode] = useState('favors')

  const { data } = useGetUsersQuery()
  const usersData = data && data.getUsers

  const { userData } = useContext(TokenContext)

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

      {/* {selectMode === 'favors' ? (
        <div>favors</div>
      ) : (
        <div>
          {usersData &&
            usersData.map(
              (user, i) =>
                userData &&
                userData.uid !== user.uid && (
                  <div key={i}>{user.first_name + ' ' + user.last_name}</div>
                )
            )}
        </div>
      )} */}

      <div
        onClick={async () => {
          console.log('trying to sign out')
          await auth.signOut().catch((err) => {
            console.log(err)
          })

          if (typeof window !== 'undefined') {
            localStorage.removeItem('token')
            window.location.reload()
          }
        }}
      >
        Sign out?
      </div>
    </Styled.ProfileContainer>
  )
}
