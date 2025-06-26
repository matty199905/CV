import styled from 'styled-components'

export const AboutMeWrapper = styled.section`
display: flex;
flex-flow: row wrap-reverse;
justify-content: space-around;
align-items: center;
width: 100%;
height: auto;
padding-top: 30px;
@media (min-width: 930px) {
    margin-top: 80px;
}
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 40vw;
padding-top: 30px;

h1{
    font-size: 35px;
    line-height: 52px;
    @media (max-width: 476px) {
font-size: 30px;
width: 90vw
}

}
h2 {
    font-size:25px;
    font-weight: 800;
    color:${(props) => (props.color === 'light' ? ' rgba(3, 0, 97, 0.73)' : 'rgba(135, 131, 251, 0.77)')};
    @media (max-width: 476px) {
font-size: 20px;
width: 90vw;
}
}
p{
    margin-top:20px;
    font-size: 14px; 
    width: 100%;
@media (max-width: 370px) {
width: 110%;
}
}
@media (max-width: 930px) {
width: 100%;
margin-top: -90px;
align-items: center;
text-align: center;
}
`



export const CvDataContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-right: 7px;
gap: 15px;
width: 80%;
height: 60px;
margin-top: 30px;
border-radius: 10px;
@media (max-width: 930px) {
justify-content: center;
}
@media (max-width: 620px) {
margin-bottom: -10px;
}
`



export const SocialContact = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
cursor: pointer;
.linkedin {color:royalblue}
.github {color: dark}
`




export const SkillsWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 620px) {
margin-top: 20px;
gap: 20px;
}
@media (max-width: 470px) {
gap: 65px;
}
`




export const SkillsContainer = styled(CvDataContainer)`
width: 100%;

span{
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0px;
}
@media (max-width: 620px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}
`
export const IconsContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 10px;
width: 100%;
margin: 0 10px;
img {
    width: 35px;
}
@media (max-width: 620px) {
    justify-content: center;

}
@media (max-width: 470px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 80vw;
    gap: 15px;
    margin: 0 30px;
}
`




export const ProfilePhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: flex-end;
margin-top: 30px;
    width: 27%;
    img{
width: 100%;
border-radius: 50px;
    }
    @media (max-width: 930px) {
min-height: 500px;
min-width: 250px;
margin-top: -60px;
}
@media (max-width: 435px) {
min-height: 400px;
min-width: 220px;
margin-top: -30px;
margin-bottom: 30px;
}
  `