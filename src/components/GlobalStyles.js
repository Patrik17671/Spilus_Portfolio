import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html{
  @media (max-width: 960px){
    font-size: 80%;
  }
}

a{
  text-decoration: none;
}
li{
  list-style: none;
}
h1{
  font-size: 3.5rem;
}
h2{
  font-size: 3rem;
}
h3{
  font-size: 2.5rem;
}

`;

export default GlobalStyles;