import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";


interface ButtonInterface { 
    color: string
}

export const Button = styled.button<ButtonInterface>`
    background-color: ${props => props.color};
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 15px;
    border: none;
    outline: none;
    padding: 15px 24px;
    font-family: 'Mulish';
    font-weight: 800;
    font-size: 30px;
    margin: 14px 0 100px 0;

    &:focus {
        border: none;
        outline: none;
    }
`