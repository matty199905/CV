import React from 'react'
import { ButtonContainer } from './buttonStyled'
import { useSelector } from 'react-redux'

const Button = ({ children, download, onClick }) => {

    
  const color = useSelector(state => state.background?.color)


    return (
        <ButtonContainer
        color={color}
            onClick={onClick}
            download={download}>

            {children}

        </ButtonContainer>
    )
}

export default Button
