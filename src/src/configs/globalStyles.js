import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *{
    margin:0;
    padding: 0;
    outline: 0 ;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
   

     
  }
  *:focus{
    outline:0;
  }
  html, body, #root{
    height:100%
  }
  body{
    -webkit-font-smoothing: antialiased;
    background:#111;
  
  }
  body, input, button{
    font: 14px 'Ubuntu', sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none
  }
button{
  cursor:pointer
}

`;
