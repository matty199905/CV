import React, { useState } from 'react'
import { IconContainer, NavbarContainer, NavLogo, SectionsContainer } from './navbarStyled'
import { LuSun } from "react-icons/lu";
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (


    <NavbarContainer>
      <NavLogo>
        Currículum Vitae
      </NavLogo>

      <SectionsContainer>

        <li onClick={()=>{window.scroll(0, 0)}}>Sobre mí</li>
        <li onClick={()=>{window.scroll(0, 680)}}>Projectos</li>
        <li onClick={()=>{window.scroll(0, 1300)}}>Contacto</li>
        <IconContainer>

          <LuSun className='icon' onClick={() => setIsOpen(!isOpen)} />

        </IconContainer>

        {/* Contenedor del Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{

            position: "absolute",
            top: "90px",
            right: 0,
            width: "10%",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: isOpen ? "block" : "none",
          }}
        >
          <ul style={{ listStyle: "none", textAlign: 'center', padding: "10px" }}>
            <li style={{ padding: "5px 0" }}>Dark</li>
            <li style={{ padding: "5px 0" }}>Light</li>
          </ul>
        </motion.div>

      </SectionsContainer>
    </NavbarContainer>


  )
}

export default Navbar
