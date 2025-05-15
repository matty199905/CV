import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

:root {
  --primary: ${(props) => (props.bgcolor === 'light' ? 'rgba(3, 0, 97, 0.17)' : 'rgba(119, 137, 253, 0.32)')} 
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
  width: 12px;      
}

::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
  cursor: grab;
}
::-webkit-scrollbar-thumb:active {
  background: #555;
  cursor: grabbing;
}
   
  }
html {
overflow-x: hidden;
}
  body {
    letter-spacing: 1px;
    background-color: ${(props) => (props.bgcolor === 'light' ? '#f5f5f5' : '#131313')};
    color: ${(props) => (props.bgcolor === 'light' ? 'black' : 'white')};
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