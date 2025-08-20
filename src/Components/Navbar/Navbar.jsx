import { useState } from 'react'
import { DropDownThemeContainer, LightIconContainer, NavbarContainer, NavLogo, SectionsContainer, ToggleIconContainer } from './navbarStyled'
import { LuSun } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import { changeBackgroundColor } from '../../Redux/Background Color/backgroundSlice';
import { CgMenu } from "react-icons/cg";
import { changeToggleState } from '../../Redux/ToggleMenu/MenuSlice';



const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const color = useSelector(state => state.Background?.color)

  const dispatch = useDispatch()




  return (

    

      <NavbarContainer 
      color={color}
      initial={{ y: -100, opacity: 0 }}   
      animate={{ y: 0, opacity: 1 }}     
      transition={{ delay: 0.4,duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md">

        <NavLogo>
          Portfolio
        </NavLogo>

        <SectionsContainer color={color}>

          <li className='sections' onClick={() => {
            window.scrollTo(0, 0)
          }}>Sobre mí</li>



          <li className='sections' onClick={() => {
            document.getElementById("proyects")?.scrollIntoView();
          }}>Proyectos</li>



          <li className='sections' onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}>Contacto</li>


          <li>
            <LightIconContainer color={color} onClick={() => setIsOpen(!isOpen)}>
              <LuSun className='icon' />
            </LightIconContainer>
          </li>



          <li>
            <ToggleIconContainer
              toggleMenu={'true'}
              color={color}

              onClick={() => {
                dispatch(changeToggleState())
              }
              }>
              <CgMenu />
            </ToggleIconContainer>
          </li>


        </SectionsContainer>

        <DropDownThemeContainer
          color={color}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          key="dropDown-bgcolor"
          isOpen={isOpen}>
          <ul >
            <li onClick={() => { dispatch(changeBackgroundColor('light')); setIsOpen(!isOpen) }}>Light</li>
            <li onClick={() => { dispatch(changeBackgroundColor('dark')); setIsOpen(!isOpen) }}>Dark</li>
          </ul>
        </DropDownThemeContainer>

      </NavbarContainer>
  


  )
}

export default Navbar
