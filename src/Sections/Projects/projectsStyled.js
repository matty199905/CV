import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 110px;
width: 100%;
height: auto;

h2 {
font-size: 33px;
@media (max-width: 595px) {
text-align: center;
font-size: 30px;
}
}
`

export const ProjectsContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
gap: 40px;
width: 100%;
height: auto;
@media (max-width: 768px) {
gap:0px;
}
`

