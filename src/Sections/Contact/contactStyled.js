import styled from 'styled-components'

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 250px;
h2{
    font-size: 28px;
    color:  rgb(3, 0, 97);
}
`

export const ContactContainer=styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 40px;
margin-top: 40px;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 320px;
height: 100px;
padding: 10px;
border: 2px solid rgba(3, 0, 97, 0.17);
border-radius: 20px;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.icon-container {
    font-size: 23px;
}
h3{
font-size: 16px;
}
span{
    font-weight: 500;
    letter-spacing: 0px;
}
a{
    font-weight: 500;
    letter-spacing: 0px;
    &:hover{
        color: blue;
    }
}
`