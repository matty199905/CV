import styled from 'styled-components'



export const FooterContainer = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
gap: 30px;
width: 100%;
height: 100px;
margin-top:130px;
border-top: 2px solid var(--primary);
span {
    font-weight: 500;
}
div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
`