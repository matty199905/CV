
import { AboutMeWrapper, CvDataContainer, IconsContainer, InfoContainer, ProfilePhoto, SkillsContainer, SkillsWrapper, SocialContact } from './aboutMeStyled'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Button from '../../UI/Button/Button';

import { useSelector } from 'react-redux'



const AboutMe = () => {

  const color = useSelector(state => state.Background?.color)


  return (
    <AboutMeWrapper >



      <InfoContainer color={color}>
        <h1>Hola, soy <br />Matías Bottcher!</h1>
        <h2>FRONT-END DEVELOPER</h2>
        <p>Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías.</p>

        <CvDataContainer>

          <a href="https://www.linkedin.com/in/matias-bottcher-09b780215/" target='_blank' rel="noreferrer"><SocialContact><FaLinkedin className='linkedin' /></SocialContact></a>
          <a href="https://github.com/matty199905" target='_blank' rel="noreferrer"><SocialContact><FaGithub className='github' /></SocialContact></a>

          <a href="Archives/CV-ProgramadorFrontend.pdf" download><Button download={"true"} type='file'>DESCARGAR CV</Button></a>

        </CvDataContainer>


        <SkillsWrapper>

          <SkillsContainer>

            <span>Stack:</span>

            <IconsContainer>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title='HTML5' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title='CSS3' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title='JavaScript' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title='TypeScript' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.Js" title='React.Js' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.Js Logo" title='Next.Js' width="40" />
            </IconsContainer>
          </SkillsContainer>



          <SkillsContainer>
                        <span>Tools:</span>
            <IconsContainer>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title='Git' width="40" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" title='NPM' width="40" />
              <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="Styled Components" title='Styled-Components' width="40" />
            </IconsContainer>
          </SkillsContainer>


          <SkillsContainer>

            <span>Basic Skills:</span>

            <IconsContainer>

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="40" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="40" />

            </IconsContainer>
          </SkillsContainer>


        </SkillsWrapper>



      </InfoContainer>


      <ProfilePhoto>
        <img src="/IMG_20180915_130837_329.jpg" alt="foto" />
      </ProfilePhoto>

    </AboutMeWrapper>
  )
}

export default AboutMe
