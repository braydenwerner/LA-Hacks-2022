import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f4a261;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 80vh;
  background-color: #f4a261;
  overflow-y: scroll;
`

export const User = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 60px;
  background-color: #2a9d8f;
  text-align: center;
  font-size: 2.5rem;
  text-overflow: ellipsis;
  cursor: pointer;
`
