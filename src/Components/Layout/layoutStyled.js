import styled from 'styled-components'


export const LayoutWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 100vw;
padding: 0 80px;
@media (max-width: 435px) {
padding: 0 40px;
}
`