import { useContext, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'
import * as Styled from './BottomNav.styled'
import { useRouter } from 'next/router'
import { TokenContext } from '../../../providers'

export const BottomNav: React.FC = () => {
  const router = useRouter()
  const { userData } = useContext(TokenContext)

  return (
    <>
      <Styled.NavContainer>
        <Styled.HomeIconContainer onClick={() => router.push('/')}>
          <AiFillHome size={32} color="white" />
        </Styled.HomeIconContainer>
        <Styled.PlusContainer onClick={() => router.push('/create-favor')}>
          <AiFillPlusCircle size={32} color="white" />
        </Styled.PlusContainer>
        <Styled.ProfileContainer>
          <BsFillPersonFill
            size={32}
            color="white"
            onClick={() => router.push(`/users/${userData.uid}`)}
          />
        </Styled.ProfileContainer>
      </Styled.NavContainer>
    </>
  )
}
