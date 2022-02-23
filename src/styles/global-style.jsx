import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --container: 1220px;
    --white: #fff;
    --black: #000c0b;
    --darkBlack: #0f1111;
    --gray: rgba(255, 255, 255, 0.265);
    --darkGray: #3e3e3e;
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
      border-color: var(--red);
      outline: none;
      box-shadow: inset 0 1px 2px var(--red), 0 0 0 .2em var(--red);
    }
  }

  html {
    line-height: 1.15;
  }

  body {
    position: relative;
    margin: 0;
    color: var(--white);
    background-color: var(--black);
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic Pro", "游ゴシック" , "游ゴシック体" , YuGothic , "Yu Gothic", "ＭＳ ゴシック" , "MS Gothic", sans-serif;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.5;
    border: 0;
  }

  main {
    position: relative;
  }

  a {
    color: var(--white);
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
