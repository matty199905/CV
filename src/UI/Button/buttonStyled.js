import styled from "styled-components";


export const ButtonContainer = styled.button`
width: ${(props)=>(props.download ? '210px' : '80px')};
height: ${(props)=>(props.download ? '45px' : '35px')};;
border-radius: 10px;
margin-left: ${(props)=>(props.download ? '20px' : '0px')};
margin-top: ${(props)=>(!props.download ? '10px' : '0px')};;
border: none;
background-color: darkblue;
color: white;
font-size: ${(props)=>(props.download ? '15px' : '14px')} ;
transition: all 0.2s ease;
&:hover{
background-color: orange;
color:black;
transition: all 0.2s ease;
}
`