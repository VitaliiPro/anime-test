import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter;
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    font-weight: 400;
    font-display: swap;
  }
  :root {
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
`;

export default GlobalStyle;
