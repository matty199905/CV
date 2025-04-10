import styled from 'styled-components'

export const AboutMeWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 580px;
margin-top: 80px;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 55%;
h1{
    font-size: 35px;
    line-height: 52px;
}
h2 {
    font-size:25px;
    font-weight: 800;
    color:${(props) => (props.color === 'light' ? ' rgba(3, 0, 97, 0.73)' : 'rgba(135, 131, 251, 0.77)')};
}
p{
    margin-top:20px;
    font-size: 14px; 
    width: 80%;
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
margin-top: 20px;
border-radius: 10px;
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




export const SkillsContainer = styled(CvDataContainer)`

span{
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0px;
}
`


export const IconSkillContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 31px;
filter: drop-shadow(0px 1px 0.5px black);


  .html { color: orangered; }
  .css { color: lightseagreen; font-size:28px }
  .js { color: #e2e201; }
  .git { color: red; font-size:29px}
  .styled-components { color: #ff00bf; font-size:45px }
  .react { color: lightseagreen; }
  .npm { color: red; font-size:29px}
  .bootstrap { color: purple; }
  .sass { color: rgb(254, 102, 216); }
`


export const ProfilePhoto = styled.div`
    width: 500px;
    height: 500px;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    background-image: url('/IMG_20180915_130837_329.jpg') ;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

  `