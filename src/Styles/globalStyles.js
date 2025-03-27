import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`


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
    background-color: #f5f5f5;
    color: black;
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