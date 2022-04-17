import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";

export const Card = styled.div`
    background-color: ${colorPalette.orange};
    border-radius: 15px;
    width: 340px;
    padding: 19px;
    margin: 8px 0 0 0;
    font-family: 'Mulish';
    font-style: normal; 

    &:first-child {
        background-color: 'black';
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.span`
    color: ${colorPalette.charcoal};
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
    margin-top: 6px;
`

export const Description = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 700;
    font-size: 14px;
    margin-top: 3px;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4 
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`