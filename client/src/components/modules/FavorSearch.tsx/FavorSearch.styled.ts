import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";


export const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    margin-top: 20px;
    width: 100%;
    padding: 0px 15px;
    justify-content: space-evenly;

    div  {
        background-color: ${colorPalette.orange};
        border-radius: 15px;
        padding: 0px 5px;
    }
`