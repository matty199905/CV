import styled from 'styled-components'


export const FlippedCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
border-radius: 20px;
background-color: rgba(3, 0, 97, 0.7);
transform: rotateY(180deg);
h3{
    margin: 20px 0 ;
    color: white;
}
`

export const AboutProject = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 84%;
border-radius: 20px;
padding: 30px;
font-size: 14px;
color: white;
background-color: rgba(3, 0, 97, 1);
p{
line-height: 21px;
font-weight: 200;
}
.tools{
        margin-top: 8px;
    }
span{
    font-weight: 500;

    a{
        font-weight: 500;
        color: orange;
    }
}
`