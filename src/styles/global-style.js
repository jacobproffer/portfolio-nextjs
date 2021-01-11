import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --container: 1220px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::selection {
    color: ${props => props.theme.white};
    background: ${props => props.theme.red};
  }

  * {
    &:focus {
      border-color: ${props => props.theme.red};
      outline: none;
      box-shadow: inset 0 1px 2px ${props => props.theme.red}, 0 0 0 .2em ${props => props.theme.red};
    }
  }

  html {
    line-height: 1.15;
  }

  body {
    position: relative;
    margin: 0;
    color: ${props => props.theme.white};
    background: ${props => props.theme.black};
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
    color: ${props => props.theme.white};
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
