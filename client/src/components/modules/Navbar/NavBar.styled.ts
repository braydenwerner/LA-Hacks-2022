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
  background-color: ${colorPalette.charcoal};
  border-bottom: 1px solid rgb(0 0 0 / 8%);
  font-family: 'Mulish';
  font-weight: 900;
  font-size: 40px;
  color: ${colorPalette.yellow};
  z-index: 500;

  div {
    margin-top: 20px;
  }
`

export const SpaceDiv = styled.div`
  height: 100px;
`
