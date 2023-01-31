import styled from '@emotion/styled/macro';

export const BalanceWrapper = styled.div`
  height: 60px;
  width: 216px;
  padding: 8px 32px 12px 32px;
  margin-bottom: 32px;

  background-color: #1515;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 256px;
    padding: 8px 40px 12px 40px;
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    width: 315px;
    margin-bottom: 32px;
  }
`;

export const BalanceText = styled.p`
  margin-bottom: 12px;

  font-size: 12px;
  color: #a6a6a6;
`;

export const BalanceValue = styled.p`
  font-family: poppins;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
`;
