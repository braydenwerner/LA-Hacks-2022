import styled from "styled-components";
import { colorPalette } from "../../../constants/constants";

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 896);
    background: ${colorPalette.yellow};
    padding-bottom: 20px;
    width: 100%;
`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${colorPalette.yellow};
`

export const Text = styled.div`
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

    ::-webkit-input-placeholder { /* WebKit browsers */
        overflow: hidden;
        text-overflow: ellipsis;
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

export const Card = styled.div`
    background-color: ${colorPalette.redOrange};
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
    font-weight: 800;
    font-size: 30px;
    margin-top: 6px;
    text-align: center;
`

export const Price = styled.span`
    color: ${colorPalette.green};
    font-weight: 800;
    font-size: 25px;
`

export const Separator = styled.div`
    border: 2px solid ${colorPalette.green};
    transform: matrix(1, 0, 0, 1, 0, 0);
`

export const Description = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 700;
    font-size: 14px;
    margin-top: 3px;
    display: -webkit-box;
   -webkit-box-orient: vertical;
`

export const Name = styled.div`
    color: ${colorPalette.charcoal};
    font-weight: 900;
    font-size: 15px;
`

export const FinishBy = styled.div`
    color: ${colorPalette.charcoal};
    font-style: italic;
    text-decoration: underline;
    font-weight: 900;
    font-size: 15px;
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
`