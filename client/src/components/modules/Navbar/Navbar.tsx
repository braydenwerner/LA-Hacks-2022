import { useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import * as Styled from './NavBar.styled'

import { auth } from '../../../config/config'
import { TokenContext } from '../../../providers'
import { SignIn, SignUp } from '../../../components/modules'
import { SpringModal } from '../../elements'

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpenMode, setModalOpenMode] = useState<string | null>(null)
  const [svgContainerOffsetLeft, setSvgContainerOffsetLeft] = useState(0)

  const { userData } = useContext(TokenContext)

  const svgContainerRef = useRef<HTMLDivElement>(null)
  const menuContainerRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  useEffect(() => {
    const updateDimensions = () => {
      if (svgContainerRef.current) {
        setSvgContainerOffsetLeft(
          svgContainerRef.current.offsetLeft +
            svgContainerRef.current.clientWidth
        )
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    window.addEventListener('click', menuHandleClick)

    return () => window.removeEventListener('click', menuHandleClick)
  }, [])

  //  will close the menu if the user clicks outside of it
  const menuHandleClick = (e: MouseEvent) => {
    //  this function is called inside an event listener, so state will not
    //  be the most updated, need to use this trick to get the most updated state
    let updatedMenuOpen = false
    setMenuOpen((oldMenuOpen) => {
      updatedMenuOpen = oldMenuOpen
      return oldMenuOpen
    })
    if (
      updatedMenuOpen &&
      menuContainerRef.current &&
      svgContainerRef.current
    ) {
      const menuDimensions = menuContainerRef.current.getBoundingClientRect()
      const svgDimensions = svgContainerRef.current.getBoundingClientRect()
      if (
        !(
          e.clientX >= menuDimensions.left &&
          e.clientX <= menuDimensions.right &&
          e.clientY <= menuDimensions.bottom &&
          e.clientY >= menuDimensions.top
        ) &&
        !(
          e.clientX >= svgDimensions.left &&
          e.clientX <= svgDimensions.right &&
          e.clientY <= svgDimensions.bottom &&
          e.clientY >= svgDimensions.top
        )
      ) {
        setMenuOpen(false)
      }
    }
  }

  return (
    <>
      <Styled.NavContainer>
        <div onClick={() => router.push('/')}>Favor</div>
      </Styled.NavContainer>
      <Styled.SpaceDiv />
    </>
  )
}
