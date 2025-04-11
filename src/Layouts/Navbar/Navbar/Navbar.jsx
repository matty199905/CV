import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { DropDownContainer, LightIconContainer, NavbarContainer, NavLogo, SectionsContainer, ToggleIconContainer } from './navbarStyled'
import { LuSun } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import { changeBackgroundColor } from '../../../Redux/Background Color/backgroundSlice';
import { CgMenu } from "react-icons/cg";
import { changeToggleState } from '../../../Redux/ToggleMenu/MenuSlice';

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const color = useSelector(state => state.Background?.color)

  const dispatch = useDispatch()




  return (


    <NavbarContainer color={color}>

      <NavLogo>
        Portfolio
      </NavLogo>

      <SectionsContainer>

        <li className='sections' onClick={() => { window.scroll(0, 0) }}>Sobre mí</li>
        <li className='sections' onClick={() => { window.scroll(0, 650) }}>Proyectos</li>
        <li className='sections' onClick={() => { window.scroll(0, 1300) }}>Contacto</li>


        <LightIconContainer>

          <LuSun className='icon' onClick={() => setIsOpen(!isOpen)} />

        </LightIconContainer>



        {/* Contenedor del Dropdown */}
          <DropDownContainer
            color={color}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3}}
            key="dropDown-bgcolor"
            isOpen={isOpen}>
            <ul >
              <li onClick={() => { dispatch(changeBackgroundColor('light')); setIsOpen(!isOpen) }}>Light</li>
              <li onClick={() => { dispatch(changeBackgroundColor('dark')); setIsOpen(!isOpen) }}>Dark</li>
            </ul>
          </DropDownContainer>

    



        <ToggleIconContainer
          toggleMenu={'true'}

          onClick={() => {
            dispatch(changeToggleState())
          }
          }>
          <CgMenu />
        </ToggleIconContainer>

      </SectionsContainer>


    </NavbarContainer>


  )
}

export default Navbar
