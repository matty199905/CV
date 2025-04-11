import React from 'react'
import { ResponsiveNavContainer } from './responsiveStyled'
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeToggleState } from '../../../Redux/ToggleMenu/MenuSlice';


const ResponsiveNavbar = () => {

    const { toggleMenu } = useSelector(state => state.MenuSlice)
    const color = useSelector(state => state.Background?.color)
    const dispatch = useDispatch()

    return (


        <AnimatePresence>

            {toggleMenu && 
            
            <ResponsiveNavContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                key="responsive-menu"
                >
                <ul>
                    <li onClick={() => { window.scroll(0, 0); dispatch(changeToggleState()) }}>Sobre mí</li>
                    <div bgcolor={color}/>
                    <li onClick={() => { window.scroll(0, 1050); dispatch(changeToggleState()) }}>Proyectos</li>
                    <div bgcolor={color}/>
                    <li onClick={() => { window.scroll(0, 2270); dispatch(changeToggleState()) }}>Contacto</li>
                </ul>
            </ResponsiveNavContainer>}

        </AnimatePresence>

    )
}

export default ResponsiveNavbar
