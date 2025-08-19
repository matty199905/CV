import styled from 'styled-components'
import { motion } from "framer-motion";


export const ProjectWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 40px;
width: 300px;
height: 450px;
h3{
    margin-top: 10px;
}
`

export const ProjectImg = styled(motion.div)`
position: relative;
width: 100%;
height: 100%;
border-radius: 20px;
z-index: 100;
padding: 0;
cursor: ${(props)=>(!props.flipped ? 'pointer' : 'auto')};

`


export const InfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

`

