import styled from "styled-components";
import { motion } from 'framer-motion'


export const NavbarContainer = styled.nav`
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 20px 30px;
width: 100vw;
height: 90px;
background-color:${(props) => (props.color === 'light' ? '#f5f5f5' : '#131313')};
border-bottom: 2px solid var(--primary);
z-index: 200;
`

export const NavLogo = styled.span`
font-size: 28px;
font-weight: 700;

`

export const SectionsContainer = styled.ul`
display: flex;
justify-content: center;
align-items: flex-end;
gap: 30px;

li {

    font-size: 15px;
    transition: all .3s ease;
    &:hover{
        color: orange;
        transition: all .3s ease;
    }
}

   li.sections {
 @media (max-width: 650px) {
display: none;
    
}
}

`

export const LightIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
margin-bottom: -8px;
border: 2px solid var(--primary);
border-radius: 10px;
font-size: 21px;
cursor: pointer;
display: ${(props) => (props.toggleMenu === 'true' ? 'none' : 'flex')} ;

    &:hover{

     background-color: orange;
     color: white;
     transition: all .3s ease;
 }
 @media (max-width: 650px) {
margin-bottom: 0px;
display: ${(props) => (props.toggleMenu === 'true' ? 'flex' : 'undefined')} ;

}

`


export const DropDownContainer = styled(motion.div)`
            position: absolute;
            top: 90px;
            right: 15px;
            width: 100px;
            min-width: 100px;
            height: 90px;
            background-color:${(props) => (props.color === 'light' ? '#f5f5f5' : '#131313')} ;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            overflow: hidden;
            display: ${(props) => (props.isOpen ? "block" : "none")};

            ul {
                list-style: none; 
                text-align: center; 
                padding: 10px;

                   li{
                    padding: 5px 0;
                   }
            }
`


export const ToggleIconContainer = styled(LightIconContainer)`
margin-left: -15px;
display: none;
@media (max-width: 650px) {
display: flex ;
}
`