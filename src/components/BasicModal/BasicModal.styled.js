import styled from '@emotion/styled/macro';
import Box from '@mui/material/Box';

export const OpenModalButton = styled.button`
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  border-style: none;
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1280px) {
    }
  }
`;

export const ModalBox = styled(Box)`
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: white;
  border: none;
  box-shadow: 24;
  padding: 0;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 540px;
  }
  @media screen and (min-width: 1280px) {
    width: 540px;
  }
`;
