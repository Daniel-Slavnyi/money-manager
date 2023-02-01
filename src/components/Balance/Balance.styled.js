import styled from '@emotion/styled/macro';

export const BalanceWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 8px 32px 18px 32px;
  margin-bottom: 32px;
  background-color: #ffffff;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 336px;
    padding: 8px 40px 12px 40px;
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceText = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 12px;
  color: #a6a6a6;
`;

export const BalanceValue = styled.p`
  padding: 0;
  margin: 0;

  font-family: Poppins;
  font-weight: 700;
  font-size: 30px;
  line-height: 1;
  color: #000000;
`;
