//CSS GLOBAL
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #ffe3e3;
  }

  body {
    font: 16px Roboto;
  }

  #root{
    background-color: #a03333;
    color: black;
    max-width: 95vw;
    margin: 0 auto;
    padding: 20px 10px;
  }
`;