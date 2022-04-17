import styled from 'styled-components'
import { colorPalette } from '../../../constants/constants'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: ${colorPalette.green};
`

export const Title = styled.div`
  font-family: 'Mulish';
  font-weight: 700;
  font-size: 24px;
  color: ${colorPalette.charcoal};
  margin: 15px 0 15px 0;
`

export const ImgWrapper = styled.div`
  margin-bottom: 10px;
`

export const CreateCommentWrapper = styled.div``

export const TextArea = styled.textarea`
  border-radius: 15px;
  max-width: 200px;
  width: 200px;
  padding: 15px 15px 0 15px;

  &:focus {
    border: none;
    outline: none;
  }
`

export const SubmitButton = styled.button``
