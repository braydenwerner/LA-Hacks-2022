import styled from 'styled-components'
import { colorPalette } from '../../../constants/constants'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const NameText = styled.div`
  font-size: 3.5rem;
  color: ${colorPalette.charcoal};
  font-weight: 700;
`

export const Selector = styled.div`
  display: flex;
  width: fit-content;
  background-color: ${colorPalette.redOrange};
  color: white;
  border-radius: 25px;
  padding: 5px 7px;
  margin-top: 38px;
`
interface SelectorTextInterface {
  selected: boolean
}
export const SelectorText = styled.div<SelectorTextInterface>`
  cursor: pointer;
  background-color: ${props => props.selected ? colorPalette.orange : colorPalette.redOrange};
  padding: 5px 35px;
  border-radius: 25px;
  font-family: 'Mulish';
  font-weight: 800;
  font-size: 25px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
interface GreenTextInterface {
  marginTop?: string
}
export const GreenText = styled.div<GreenTextInterface>`
  background-color: ${colorPalette.green};
  color: white;
  border-radius: 15px;
  padding: 5px 20px;
  width: fit-content;
  margin-top: ${props => props.marginTop ? props.marginTop : '15px'};
  margin-bottom: 15px;
  font-family: 'Mulish';
  font-weight: 800;
  font-size: 22px;
  color: #FFFFFF;
`

export const SmallText = styled.div`
  font-size: 24px;
  margin-bottom: 18px;
  font-family: 'Mulish';
  font-weight: 800;
  color: ${colorPalette.charcoal}
`

export const Card = styled.div`
    background-color: ${colorPalette.yellow};
    border-radius: 15px;
    width: 340px;
    padding: 19px;
    margin: 8px 0 0 0;
    font-family: 'Mulish';
    font-style: normal;
    display: flex;
    align-items: center;
    grid-gap: 15px;
    justify-content: space-between;
`
export const Description = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 700;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4 
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`

interface PriceInterface {
  color: string
}
export const Price = styled.div<PriceInterface>`
  font-family: 'Mulish';
  font-weight: 1000;
  font-size: 30px;

  color: ${props => props.color};
`

export const Title = styled.span`
    color: ${colorPalette.charcoal};
    font-weight: 900;
    font-size: 22px;
`