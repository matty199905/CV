import styled from "styled-components";


export const ButtonContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: ${(props)=>(props.download ? '180px' : '80px')};
height: ${(props)=>(props.download ? '40px' : '35px')};;
border-radius: 15px;
margin-left: ${(props)=>(props.download ? '20px' : '0px')};
margin-top: ${(props)=>(!props.download ? '10px' : '0px')};
border: none;
padding: ${(props)=>(props.download ? '30px 20px' : '0px')};;;
background-color: ${(props) => (props.color === 'light' ? 'darkblue' : 'rgba(103, 98, 255, 0.77)')};
color: white;
font-size: ${(props)=>(props.download ? '15px' : '14px')} ;
transition: all 0.2s ease;
&:hover{
background-color: orange;
color:white;
transition: all 0.2s ease;
}
@media (max-width:930px) {
scale: ${(props)=>(props.download ? '0.9': 'none')};
margin-left: ${(props)=>(props.download ? '0px' : '0px')};
}
@media (max-width:530px) {
font-size: ${(props)=>(props.download ? '13px' : undefined)};
max-width: ${(props)=>(props.download ? '150px': undefined)};
transform: ${(props)=>(!props.download ? 'scale(0.9)' : undefined)};}
`