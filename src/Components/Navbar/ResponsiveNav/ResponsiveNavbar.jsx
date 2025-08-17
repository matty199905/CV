 
import { ResponsiveNavContainer, Separator } from './responsiveStyled'
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
                bgColor={color}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                key="responsive-menu"
                >
                <ul>
                    <li onClick={() => { window.scroll(0, 0); dispatch(changeToggleState()) }}>Sobre mí</li>
                    <Separator bgColor={color}/>
                    <li onClick={() => { document.getElementById("proyects")?.scrollIntoView(); dispatch(changeToggleState()) }}>Proyectos</li>
                    <Separator bgColor={color}/>
                    <li onClick={() => { document.getElementById("contact")?.scrollIntoView();; dispatch(changeToggleState()) }}>Contacto</li>
                </ul>
            </ResponsiveNavContainer>}

        </AnimatePresence>

    )
}

export default ResponsiveNavbar
