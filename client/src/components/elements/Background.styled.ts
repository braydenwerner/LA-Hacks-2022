import styled from "styled-components"
import { colorPalette } from "../../constants/constants"

interface BackgroundProps {
    color: string
}
export const Background = styled.div<BackgroundProps>`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${(props) => props.color};
`