
import { AboutProject, FlippedCardContainer } from './flippedCardStyled'

const FlippedCard = ({ description, tools, projectCode }) => {
    return (
        <FlippedCardContainer>
            <h3>Sobre el Proyecto</h3>
            <AboutProject>
                <div className='description'> <span>{description[0]}</span>
                    {description.slice(1).map((item)=> <ul><li>{item}</li></ul>)}</div>

                <div className='tools'>
                    <span>Herramientas Utilizadas:  </span>
                    <ul>
                        {tools}
                    </ul>

                </div>

                <div className='github'>
                    <span>GitHub:</span>
                    <a href={projectCode} target="_blank" rel="noopener noreferrer">{projectCode}</a>
                </div>
            </AboutProject>

        </FlippedCardContainer>
    )
}

export default FlippedCard
