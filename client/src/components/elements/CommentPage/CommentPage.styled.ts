import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: ${colorPalette.green}
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