import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutMeWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
margin: 160px 0 100px 0;
`


export const ProfilePhotoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
width: 170px;
height: 170px;
border-radius: 50%;
box-shadow: ${(props) => (props.bgColor === 'light' ? '0px 5px 15px rgba(0, 0, 0, 0.24)' : '0px 5px 15px rgba(0, 0, 0, 1)')};
background-image: url('/Imgs/Profile-Photo.jpg');
background-size: cover;
background-position-y: -25px;
  @media(max-width: 690px) {
width: 145px;
height: 145px;
}
  @media(max-width: 575px) {
margin: -15px 0 15px 0;
}
  `

export const TitleContainer = styled.div`
display: column;
width:350px;
h1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  font-size:  35px;
  line-height: 52px;
  @media(max-width: 575px) {
    text-align: center;
font-size: 30px;
}
  @media(max-width: 445px) {
font-size: 28px;
line-height: 1.5;
}

}
h2 {
   text-align: start;
    font-size:25px;
    font-weight: 800;
    color:${(props) => (props.color === 'light' ? ' rgba(3, 0, 97, 0.73)' : 'rgba(110, 202, 205, 0.87)')};
    text-shadow: ${(props) => (props.color === 'dark' ? '0px 0px 40px rgba(0, 0, 0, 1)' : 'none')} ;
    
@media(max-width: 575px) {
  text-align:center;
    font-size: 20px;
    }
  @media(max-width: 445px) {
font-size: 17px;
}
}
`
export const TitlePhotoContainer = styled.div`
display: flex;
flex-flow: row wrap-reverse;
justify-content: space-between;
align-items: center;
gap: 30px;
width: auto;
height: auto;
padding:0 40px;
@media(max-width: 605px) {
justify-content: center;
gap: 0px;
}
@media(max-width: 430px) {
padding: 0px;
width: 100vw;
}
`
export const Description = styled.div`
max-width: 600px;
width: 100%;
height: auto;
padding: 0 40px;
box-sizing: border-box; 
p{
  color: rgba(255, 255, 255, 0.66);
  font-size: 14px; 
    text-align: center;
    margin-top:20px;
    width: 100%;
}
`

export const CvDataContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-right: 7px;
gap: 15px;
width: 80%;
height: 60px;
margin-top: 30px;
border-radius: 10px;
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
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 30px;
width: 100vw;
height: auto;
margin-top: 15px;
padding: 0 60px;
`




export const SkillsContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
width:auto;
height: auto;
margin:30px 0 -25px 0;
span{
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0px;
}

`
export const IconsContainer = styled.div`
display: flex;
justify-content: center;
gap: 10px;
padding: 10px 20px;
border-radius:20px;
background: ${(props) => (props.bgColor === 'light' ? 'linear-gradient(to left, rgba(255, 255, 255, 0.14), rgba(1, 1, 1, 0.11));' :
        'linear-gradient(to left, rgba(255, 255, 255, 0.11), rgba(81, 81, 81, 0.1), rgba(1, 1, 1, 0.43));')};
backdrop-filter: blur( 10px);
width:300px;
margin: 0 0px;
img {
    width: 35px;
}
`


