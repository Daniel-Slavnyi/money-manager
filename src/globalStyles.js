import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    .css-1yjjitx-MuiSwitch-track  {
        background-color: yellow;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Circe', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }

    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: currentColor;
    }
    textarea {
        resize: none;
    }
    `;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;

export default GlobalStyle;
