import styled from '@emotion/styled/macro';

export const SelectsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    margin-right: 0;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;
