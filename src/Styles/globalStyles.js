import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

:root {
  --primary:${(props) => (props.color === 'light' ? 'rgba(3, 0, 97, 0.17)' : 'rgba(119, 137, 253, 0.32)')} 
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
   
  }
html {
  overflow-x: hidden;
}
  body {
    font-family: 'Arial', sans-serif;
    letter-spacing: 1px;
    background-color:${(props) => (props.color === 'light' ? '#f5f5f5' : '#131313')};
    color: ${(props) => (props.color === 'light' ? 'black' : 'white')};
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

 li{
list-style: none;
cursor: pointer;
 }

  button {
    cursor: pointer;
  }
`