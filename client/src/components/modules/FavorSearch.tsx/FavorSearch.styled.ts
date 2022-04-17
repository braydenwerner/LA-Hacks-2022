import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";


export const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 15px;
    width: 100%;
    padding: 0px 15px;
    justify-content: space-evenly;

    div  {
        background-color: ${colorPalette.orange};
        border-radius: 15px;
        padding: 0px 5px;
    }
`

export const Selector = styled.div`
  display: flex;
  width: fit-content;
  background-color: ${colorPalette.redOrange};
  color: white;
  border-radius: 25px;
  padding: 5px 7px;
  margin-top: 20px;
`
interface SelectorTextInterface {
  selected: boolean
}
export const SelectorText = styled.div<SelectorTextInterface>`
  cursor: pointer;
  background-color: ${props => props.selected ? colorPalette.orange : colorPalette.redOrange};
  padding: 7px 15px;
  border-radius: 25px;
  font-family: 'Mulish';
  font-weight: 800;
  font-size: 20px;
`