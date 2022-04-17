import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 896);
    background: ${colorPalette.green};
    padding-bottom: 20px;
    width: 100%;
`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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

export const CreateCommentWrapper = styled.div`
    margin: 18px 0;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
`

export const TextArea = styled.textarea`
    border-radius: 15px;
    max-width: 230px;
    width: 230px;
    padding: 15px 15px 0 15px;

    &:focus {
        border: none;
        outline: none;
    }
`

export const SubmitButton = styled.button`
    background: ${colorPalette.charcoal};
    border-radius: 15px;
    outline: none;
    border: none;
    padding: 7px 13px 7px 13px;
    color: white;
    max-height: 30px;


    &:focus{
        outline: none;
        border: none;
    }
    margin-left: 8px;
`
