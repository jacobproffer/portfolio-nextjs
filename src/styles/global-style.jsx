import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --container: 1440px;
    --white: #fff;
    --black: #000c0b;
    --darkBlack: #0f1111;
    --gray: #f6f6f6;
    --dark-gray: #737373;
    --lightGray: #f4f4f4;
    --green: #00b378;
    --red: #ff572b;
    --focusOutline: 2px dotted #949494;
    --gridCols: 12;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::selection {
    color: var(--white);
    background: var(--red);
  }

  * {
    &:focus {
      outline: 2px solid var(--dark-gray);
      outline-offset: 2px;
    }
  }

  html {
    line-height: 1.15;
  }

  body {
    position: relative;
    margin: 0;
    color: var(--black);
    background-color: var(--white);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    border: 0;
  }

  main {
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  h1,
  h3 {
    margin: 0;
  }

  h2 {
    margin-top: 0;
    line-height: 1;
  }

  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  dd {
    &:first-of-type {
      font-weight: 400;
    }

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
`;

export default GlobalStyle;
