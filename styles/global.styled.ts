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
    --lightGray: #ebebeb;
    --gray: #666666;
    --gray-2: #5a5a5a;
    --gray-3: #dddddd;
    --gray-4: #757575;
    --gray-5: #a7a7a7;
    --black: #000000;
    --white: #ffffff;

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
