import styled from '@emotion/styled/macro';

export const OpenModalButton = styled.button`
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
    scale: 1.1;
  }
`;
