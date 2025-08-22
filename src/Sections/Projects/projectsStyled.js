import styled from 'styled-components'

export const ProjectsWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin: 110px 0 80px 0;
width: 100%;
height: auto;

h2 {
    color:${(props) => (props.color === "light" ? "rgb(3, 0, 97)" : "rgba(103, 98, 255, 0.77)")};
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
gap: 25px;
width: 100%;
height: auto;
`

