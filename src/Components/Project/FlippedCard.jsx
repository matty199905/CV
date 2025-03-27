import React from 'react'
import { AboutProject, FlippedCardContainer } from './flippedCardStyled'

const FlippedCard = ({ description, tools, projectCode }) => {
    return (
        <FlippedCardContainer>
            <h3>Sobre el Proyecto</h3>
            <AboutProject>
                <p>{description}</p>

                <span>Herramientas Utilizadas: <p className='tools'>{tools}</p></span>
                <span>GitHub:    
                     <a href={projectCode} target="_blank" rel="noopener noreferrer"> {projectCode}</a>
                </span>
            </AboutProject>

        </FlippedCardContainer>
    )
}

export default FlippedCard
