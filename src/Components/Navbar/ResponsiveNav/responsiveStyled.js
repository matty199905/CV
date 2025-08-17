import styled from "styled-components";
import { motion } from 'framer-motion';


export const ResponsiveNavContainer = styled(motion.div)`
position: fixed;
top: 90px;
left: 0px;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 220px;
border-bottom-left-radius:20px ;
border-bottom-right-radius:20px ;
background: ${(props)=>(props.bgColor === 'light' ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.14), rgba(1, 1, 1, 0.16));' : 'linear-gradient(to top, rgba(255, 255, 255, 0.14), rgba(1, 1, 1, 0.3));')};
backdrop-filter: blur(20px);
z-index: 199;
ul{
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li{
        font-size: 18px;

    }
 }
`

export const Separator = styled.div`
        height: 1px;
        width: 100vw;
        background-color: ${(props) => (props.bgColor === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.31)')};
    
`