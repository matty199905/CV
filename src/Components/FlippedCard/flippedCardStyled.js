import styled from 'styled-components'


export const FlippedCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
position: absolute;
width: auto;
height: 400px;
border-radius: 20px;
background-color: rgba(3, 0, 97, 0.7);
backdrop-filter: blur(5px);
transform: rotateY(180deg);
    ::-webkit-scrollbar {
  width: 8px;      
}
h3{
    margin: 10px 0 ;
    color: white;
}
`


export const AboutProject = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
justify-content: flex-start;
align-items: center;
width: 100%;
height: auto;
border-radius: 20px;
font-size: 14px;
font-weight: 300;
text-align: center;
color: white;
background:linear-gradient(to bottom, rgba(2, 0, 59, 0.7),rgba(130, 126, 248, 0.7)) ;
overflow-y: auto;

div.description{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    font-size: 13px;
    text-align: left;
  
ul {
    margin-left: 8px;
    li{
    
        list-style: disc; 
      }
}

  

}


div.tools {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

span{
    margin-bottom: 10px;
    }

    ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 7px;

    }

    li {
    
    line-height: 21px;
    font-weight: 200;
    margin-bottom: 2px;
    background-color: rgba(2, 0, 51, 0.46);
    padding: 6px 10px;
    border-radius: 8px;
    cursor: default;

    } }


    div.github {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-top: 30px;
        gap: 5px;

span{
    font-weight: 500;

}

a{
    font-weight: 500;
    color: orange;
    max-width: 100%;
    word-break: break-all;
    overflow-wrap: break-word;
    display: flex;
    }
    
} 
     @media (max-width: 580px) {
    padding: 30px 60px
}

    @media (max-width: 500px) {
    padding: 30px 30px;
    gap: 20px;
}
`




