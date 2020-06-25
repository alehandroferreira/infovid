import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-front-smoothing: antialiased;
  }

  body, input, button {
  font: 16px Roboto, sans-serif;
  }

  #root {
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px auto
  }

`;
