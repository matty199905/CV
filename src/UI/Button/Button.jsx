import React from 'react'
import { ButtonContainer } from './buttonStyled'

const Button = ({ children, download, onClick }) => {
    return (
        <ButtonContainer
            onClick={onClick}
            download={download}>

            {children}

        </ButtonContainer>
    )
}

export default Button
