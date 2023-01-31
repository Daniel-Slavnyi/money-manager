import styled from '@emotion/styled/macro';

export const Caption = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 20px;
`;

export const FlexWrapper = styled.div`
   @media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  width: 704px;
  margin: 0 32px 0 32px;
  }

  @media screen and (min-width: 1280px) {
  width: 715px;
  margin: 0 16px 0 69px;
  }
`;

export const WrappCart = styled.div`

@media screen and (min-width: 768px) {
  margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const WrappTable = styled.div`
  
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 97px;
  }
`;
