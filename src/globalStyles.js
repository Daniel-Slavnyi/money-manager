import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

import BgLeft from './styles/images/EllipseLeft.svg';
import BgRight from './styles/images/EllipseRight.svg';

const GlobalStyle = createGlobalStyle`
    ${normalize}
* {
  box-sizing: border-box; 
}
.green {
  color: #24CCA7;
}
.red {
  color: #FF6596;
}
.MuiSwitch-sizeBig {
    width: 80px !important;
    height: 50px !important;
    border-radius: 30px !important;
    
}
.MuiSwitch-track {
width: 80px !important;
height: 40px !important;
border-radius: 30px !important;
  border: 1px solid black !important;
  background-color: white !important;
margin: 0 !important;

}
.MuiSwitch-root {
  width: 90px !important;
   height: 70px !important;
   overflow: visible !important;
   
}
.MuiSwitch-thumb {
margin-left: 16px !important;
scale: 2;
}
.MuiSwitch-input {
  
}
.MuiSwitch-sizeMedium {
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 40px !important;
  
}
.MuiSwitch-switchBase {
  position: absolute !important;
  top: -3px !important;
  left: -10px !important;
  height: 44px !important;
  color: #24CCA7 !important;
  height: 44px !important;
  
}
.Mui-checked {
  position: absolute !important;
  top: -3px !important;
  right: 5px !important;
  color: #FF6596 !important;
  height: 44px !important;
}
.MuiFormControlLabel-root {
  margin: 0;
}


    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Circe', sans-serif;
        font-weight: 400;
        font-size: 18px;
        background: url(${BgLeft}) no-repeat 0 bottom / 40%, url(${BgRight}) no-repeat right top / 30% #E7EAF2;
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
