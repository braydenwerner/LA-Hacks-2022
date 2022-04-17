import styled from "styled-components"
import { colorPalette } from "../../../constants/constants"

export const Card = styled.div`
    background-color: ${colorPalette.yellow};
    border-radius: 15px;
    width: 340px;
    padding: 19px;
    margin: 25px 0 0 0;
    font-family: 'Mulish';
    font-style: normal;
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

export const Price = styled.span`
    color: ${colorPalette.green};
    font-weight: 800;
    font-size: 25px;
`

export const Separator = styled.div`
    border: 2px solid ${colorPalette.redOrange};
    transform: matrix(1, 0, 0, 1, 0, 0);
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

export const Name = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 900;
    font-size: 15px;
`

export const FinishBy = styled.div`
    color: ${colorPalette.charcoal};
    font-style: italic;
    font-weight: 900;
    font-size: 15px;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
`