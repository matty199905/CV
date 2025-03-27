import React from 'react'
import { AboutMeWrapper, CvDataContainer, IconSkillContainer, InfoContainer, ProfilePhoto, SkillsContainer, SkillsWrapper, SocialContact } from './aboutMeStyled'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import Button from '../../UI/Button/Button';

import { useSelector } from 'react-redux'


const AboutMe = () => {

  const color = useSelector(state => state.background?.color)


  return (
    <AboutMeWrapper >



      <InfoContainer color={color}>
        <h1>Hola, soy <br />Matías Bottcher!</h1>
        <h2>FRONT-END DEVELOPER</h2>
        <p>Apasionado por la creación de interfaces web modernas, accesibles y optimizadas. Con experiencia en ReactJs, desarrollo de componentes reutilizables y consumo de APIs REST. Con capacidad para resolver problemas y aprender rápidamente nuevas tecnologías.</p>

        <CvDataContainer>

          <a href="https://www.linkedin.com/in/mati-ab-9641a0263" target='_blank' rel="noopener"><SocialContact><FaLinkedin className='linkedin' /></SocialContact></a>
          <a href="https://github.com/matty199905" target='_blank' rel="noopener"><SocialContact><FaGithub className='github' /></SocialContact></a>

          <Button download={"true"} type='file'><a href="archivo.pdf" download>DESCARGAR CV</a></Button>

        </CvDataContainer>



        <SkillsContainer>

          <span>Tech Skills:</span>


          <IconSkillContainer title='HTML5'><FaHtml5 className='html' /></IconSkillContainer>

          <IconSkillContainer title='CSS3'><SiCss3 className='css' /></IconSkillContainer>

          <IconSkillContainer title='Javascript'><FaJs className='js' /></IconSkillContainer>

          <IconSkillContainer title='Git'><FaGitSquare className='git' /></IconSkillContainer>

          <IconSkillContainer title='Styled Components'><SiStyledcomponents className='styled-components' /></IconSkillContainer>

          <IconSkillContainer title='React'><FaReact className='react' /></IconSkillContainer>

          <IconSkillContainer title='NPM'><SiNpm className='npm' /></IconSkillContainer>

        </SkillsContainer>




        <SkillsContainer>

          <span>Basic Skills:</span>

          <IconSkillContainer title='Bootstrap'><FaBootstrap className='bootstrap' /></IconSkillContainer>

          <IconSkillContainer title='Sass'><SiSass className='sass' /></IconSkillContainer>

        </SkillsContainer>





      </InfoContainer>


      <ProfilePhoto />

    </AboutMeWrapper>
  )
}

export default AboutMe
