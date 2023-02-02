import styled from '@emotion/styled/macro';
import theme from 'styles/theme';

export const EditDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  background-color: white;
  border: 1px solid ${theme.palette.colorList.blue};
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover {
    scale: 1.1;
  }
`;
