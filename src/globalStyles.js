import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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

export default GlobalStyle;
