import styled from 'styled-components'
import { colorPalette } from '../../../constants/constants'

export const ProfileContainer = styled.div`
    display: flex
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #F4A261;
`

export const NameText = styled.div`
  font-size: 3.5rem;
  color: ${colorPalette.charcoal};
  font-weight: 700;
  width: 130px;
`

export const UnderLine = styled.div`
  height: 10px;
  background-color: ${colorPalette.green};
  width: 130px;
`

export const Selector = styled.div`
  display: flex;
`

export const SelectorText = styled.div`
  cursor: pointer;
`
