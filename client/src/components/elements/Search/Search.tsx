import { useContext, useEffect, useState } from 'react'
import { useGetUsersQuery, User } from '../../../generated/graphql'
import Image from 'next/image'
import { TokenContext } from '../../../providers'
import { auth } from '../../../config/config'
import { useRouter } from 'next/router'
import { BottomNav, Navbar } from '../../modules'
import * as Styled from './Search.styled'
import { colorPalette } from '../../../constants/constants'

export const Search: React.FC = () => {
  const { data } = useGetUsersQuery()
  const usersData = data && data.getUsers

  const router = useRouter()

  return (
    <>
      <Styled.Background />
      <Navbar
        title={'Search'}
        titleColor={colorPalette.redOrange}
        backButton={false}
        settingsButton={false}
        link={''}
        hasLink={false}
      />
      <div style={{ height: '50px' }}></div>
      <Styled.SearchInput placeholder={'Search users'}></Styled.SearchInput>
      <Styled.SearchContainer>
        {usersData &&
          usersData.map((user, i) => (
            <Styled.User
              key={i}
              onClick={() => router.push('/users/' + user.uid)}
            >
              <Styled.UserText>
                {' '}
                {user.first_name + ' ' + user.last_name}
              </Styled.UserText>
            </Styled.User>
          ))}
      </Styled.SearchContainer>
      <BottomNav />
    </>
  )
}
