import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter;
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-weight: 400;
    font-display: swap;
  }
  :root {
    // colors:
    --primary: #ebebeb;
    --secondary: #666666;
    --date-color: #5a5a5a;
    --border-color: #dddddd;
    --search-color: #757575;
    --font-color-primary: #a7a7a7;
    --font-color: #000000;
    --bg-color: #ffffff;

    // fonts:
    --font-default: 'Inter', sans-serif;
  }
  * {
    box-sizing: border-box;
    font-family: var(--font-default);
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
