import * as Styled from './Button.styled'

interface ButtonProps {
    text: string,
    color: string,
    callback: () => void
}

export const Button: React.FC<ButtonProps>= ({text, color, callback}) => {
    return(
        <Styled.Button color={color} onClick={callback}>{text}</Styled.Button>
    )
}