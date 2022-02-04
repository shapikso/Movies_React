import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark-primary-color: #151C26;
    --dark-primary-color-opacity: #151C267F;
    --dark-primary-color-opacity-80: #151C26CC;
    --dark-primary-color-opacity-90: #000000e6;
    --light-primary-color: #DBDEE5;
    --light-primary-color-opacity: #DBDEE580;
    --primary-color: #5C5470;
    --primary-color-opacity: #5C547080;
    --primary-color-disabled: #5C547033;
    --primary-color-invalid: #ff0000;
  }

  body {
    background-color: var(--dark-primary-color);
    color: var(--light-primary-color);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 0.1em;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--light-primary-color);
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,*:before,*:after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner {padding:0;border:0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
`;