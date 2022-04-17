import Image from 'next/image'
import styled from 'styled-components'
import { colorPalette } from '../../../constants/constants'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 110px;
  width: 100%;
  top: 0px;
  left: 0px;
  padding: 0 20px;
  background-color: ${colorPalette.charcoal};
  border-bottom: 1px solid rgb(0 0 0 / 8%);
  font-family: 'Mulish';
  font-weight: 900;
  font-size: 40px;
  color: ${colorPalette.yellow};
  justify-content: space-between;
  z-index: 999;
`

export const SpaceDiv = styled.div`
  height: 110px;
`

interface SettingWrapperInterface {
  visibility: boolean
}
export const BackWrapper = styled.div`
  margin-top: 40px;
`

interface ImgWrapperInterface {
  visibility: boolean
}
export const ImgWrapper = styled.div<ImgWrapperInterface>`
  margin-top: 40px;
  visibility: ${(props) => props.visibility ? "visible" : "hidden"} ;
`
