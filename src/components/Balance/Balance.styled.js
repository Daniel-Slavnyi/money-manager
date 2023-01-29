import styled from '@emotion/styled/macro';

export const BalanceWrapper = styled.div`
  min-width: 280px;
  min-height: 80px;
  padding: 8px 32px 12px 32px;
  margin-bottom: 32px;

  background-color: #1515;
  border-radius: 30px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const BalanceText = styled.p`
  margin-bottom: 12px;

  font-size: 12px;
  line-height: 1.5;
  color: #a6a6a6;
`;

export const BalanceValue = styled.p`
  font-family: poppins;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
`;
