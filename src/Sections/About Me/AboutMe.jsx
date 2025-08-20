
import { AboutMeWrapper, CvDataContainer, IconsContainer, InfoContainer, ProfilePhoto, SkillsContainer, SkillsWrapper, SocialContact } from './aboutMeStyled'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux'
import TextType from '../../Components/React Bits/TextType/TextType';
import AnimatedContent from '../../Components/React Bits/AnimatedContent/AnimatedContent';
import ShinyText from '../../Components/React Bits/ShinyText/ShinyText';




const AboutMe = () => {

  const color = useSelector(state => state.Background?.color)


  return (
    <AboutMeWrapper>



      <InfoContainer color={color}>
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
                Hola 👋, <br />
                soy Matías Bottcher!
              </>
          }
        </h1>

        <h2>FRONT-END DEVELOPER</h2>

        <p>
          {
            color === 'dark' ?
              <ShinyText
                text="Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías."
                disabled={false}
                speed={2}
                className='custom-class' />

              :

              '         Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías.'

          }
        </p>

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


          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.2}
          >
            <SkillsContainer bgColor={color}>
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

          </AnimatedContent>


          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.9}
          >
            <SkillsContainer bgColor={color}>
              <span className='basic-skills'>Styling:</span>
              <IconsContainer>
                <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="Styled Components" title='Styled-Components' width="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title='Bootstrap' width="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" title='Sass' width="40" />
              </IconsContainer>
            </SkillsContainer>

          </AnimatedContent>


          <AnimatedContent
            distance={200}
            direction="horizontal"
            reverse={true}
            duration={2}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={1.4}
          >
            <SkillsContainer bgColor={color}>
              <span>Tools:</span>
              <IconsContainer>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title='Git' width="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" title='NPM' width="40" />
                <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vercel-light.svg" alt="Vercel" title='Vercel' height="28" width="30" />

              </IconsContainer>
            </SkillsContainer>

          </AnimatedContent>

        </SkillsWrapper>

      </InfoContainer>



      <ProfilePhoto bgColor={color}>
        <img src="/IMG_20180915_130837_329.jpg" alt="foto" />
      </ProfilePhoto>



    </AboutMeWrapper>
  )
}

export default AboutMe
