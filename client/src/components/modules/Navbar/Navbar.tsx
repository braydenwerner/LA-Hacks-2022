import { useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import * as Styled from './NavBar.styled'

import { auth } from '../../../config/config'
import { TokenContext } from '../../../providers'
import { SignIn, SignUp } from '../../../components/modules'
import { SpringModal } from '../../elements'

interface NavbarProps {
  title: string,
  titleColor: string,
  hasLink?: boolean,
  link: string,
  backButton: boolean,
  settingsButton: boolean,
}

export const Navbar: React.FC<NavbarProps> = ({title, titleColor, link, hasLink, backButton, settingsButton}) => {
  const { userData } = useContext(TokenContext)

  const router = useRouter()

  return (
    <>
      <Styled.NavContainer>
        <Styled.ImgWrapper visibility={backButton}>
          <Image 
            src="/backbutton.svg" 
            onClick={() => router.push(link)} 
            width={60} 
            height={40}
            /> 
        </Styled.ImgWrapper>
        {(backButton || !hasLink) ? (
          <div style={{marginTop: '40px', minWidth: '60px', color: titleColor}}> {title} </div>
        ) : 
          <div style={{marginTop: '40px', minWidth: '60px'}} onClick={() => router.push(link)}>{title}</div>
        }
        <Styled.ImgWrapper visibility={settingsButton}>
          <Image 
            src="/settings.svg" 
            onClick={() => router.push('/settings')} 
            width={60} 
            height={35}
          /> 
        </Styled.ImgWrapper>
      </Styled.NavContainer>
      <Styled.SpaceDiv />
    </>
  )
}
