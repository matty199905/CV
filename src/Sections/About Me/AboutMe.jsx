
import { AboutMeWrapper, CvDataContainer, Description, IconsContainer, ProfilePhotoContainer, SkillsContainer, SkillsWrapper, SocialContact, TitlePhotoContainer, TitleContainer } from './aboutMeStyled'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux'
import TextType from '../../Components/React Bits/TextType/TextType';
import ShinyText from '../../Components/React Bits/ShinyText/ShinyText';





const AboutMe = () => {

  const color = useSelector(state => state.Background?.color)


  return (
    <AboutMeWrapper>


      <TitlePhotoContainer>

        <TitleContainer>
          <h1>
            {
              color === 'dark' ?
                <TextType
                  text={"Hola 👋, soy \nMatías Bottcher!"}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"

                />
                :
                <>
                  Hola 👋, soy <br />
                  Matías Bottcher!
                </>
            }
          </h1>

          <h2>FRONT-END DEVELOPER</h2>
        </TitleContainer>
        <ProfilePhotoContainer bgColor={color} />


      </TitlePhotoContainer>

      <Description>

        {
          color === 'dark' ?
            <ShinyText
              text="Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías."
              disabled={false}
              speed={3}
              className='custom-class'
            />
            :

            <p>
              Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías.
            </p>
        }


      </Description>

      <CvDataContainer>

        <a href="https://www.linkedin.com/in/matias-bottcher-09b780215/" target='_blank' rel="noreferrer" aria-label='Linkedin'>
          <SocialContact>
            <FaLinkedin className='linkedin' />
          </SocialContact>
        </a>

        <a href="https://github.com/matty199905" target='_blank' rel="noreferrer" aria-label='Github'>
          <SocialContact>
            <FaGithub className='github' />
          </SocialContact>
        </a>

        <a href="Archives/CV-ProgramadorFrontend.pdf" download>
          <Button download={"true"} type='file'>DESCARGAR CV</Button>
        </a>

      </CvDataContainer>


      <SkillsWrapper>



        <SkillsContainer
          initial={{ opacity: 0, x: -200,  filter: "blur(10px)"  }}
           whileInView={{ opacity: 1, x: 0,  filter: "blur(0px)"  }}
          transition={{ duration: 1.2, delay: 0, ease: "easeOut" }}
          viewport={{ once: false, amount: 0}}
          key="stack"
          bgColor={color}>
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





        <SkillsContainer
          initial={{ opacity: 0, x: -200,  filter: "blur(10px)"  }}
          whileInView={{ opacity: 1, x: 0,  filter: "blur(0px)"  }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0 }}
          key="styling"
          bgColor={color}>
          <span>Styling:</span>
          <IconsContainer>
            <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="Styled Components" title='Styled-Components' width="40" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title='Bootstrap' width="40" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" title='Sass' width="40" />
          </IconsContainer>
        </SkillsContainer>





        <SkillsContainer
          initial={{ opacity: 0, x: -200,  filter: "blur(10px)"  }}
          whileInView={{ opacity: 1, x: 0,  filter: "blur(0px)"  }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0 }}
          key="tools"
          bgColor={color}>
          <span>Tools:</span>
          <IconsContainer>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title='Git' width="40" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" title='NPM' width="40" />
            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vercel-light.svg" alt="Vercel" title='Vercel' height="28" width="30" />

          </IconsContainer>
        </SkillsContainer>

      </SkillsWrapper>









    </AboutMeWrapper>
  )
}

export default AboutMe
