import styled from 'styled-components'
import { colorPalette } from '../../../constants/constants'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f4a261;
  background-color: ${colorPalette.orange};
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 80vh;
  overflow-y: scroll;
`

export const User = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 60px;
  background-color: ${colorPalette.orange};
  font-size: 2.5rem;
  text-overflow: ellipsis;
  cursor: pointer;
`

export const UserText = styled.div`
  color: ${colorPalette.charcoal};
  padding-left: 10px;
  font-weight: 700;
`

export const SearchInput = styled.div``
