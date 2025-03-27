import styled from "styled-components";
import { motion } from 'framer-motion'


export const NavbarContainer = styled.nav`
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 20px 30px;
width: 92%;
height:90px;
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
`

export const IconContainer = styled.div`
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


    &:hover{

     background-color: orange;
     color: white;
     transition: all .3s ease;
 }

    
`


export const DropDownContainer = styled(motion.div)`

`