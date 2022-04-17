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
    justify-content: flex-start;
    align-items: center;
`

export const Title = styled.span`
    color: ${colorPalette.charcoal};
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;
    margin-left: 10px;
`

export const Description = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 700;
    font-size: 14px;
    margin-top: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4 
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`
export const ImgWrapper = styled.div`
    max-height: 22px;
    z-index: 1;
`