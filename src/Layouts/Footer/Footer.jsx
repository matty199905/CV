 
import { FooterContainer } from './footerStyled'
import { SocialContact } from '../../Sections/About Me/aboutMeStyled'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
<FooterContainer>

<span>Matías Axel Bottcher</span>

<div>

          <a href="https://www.linkedin.com/in/matias-bottcher-09b780215/" target='_blank' rel="noreferrer"><SocialContact><FaLinkedin className='linkedin' /></SocialContact></a>
          <a href="https://github.com/matty199905" target='_blank' rel="noreferrer"><SocialContact><FaGithub className='github'/></SocialContact></a>
</div>

</FooterContainer>
  )
}

export default Footer
