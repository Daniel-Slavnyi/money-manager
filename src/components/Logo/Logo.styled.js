import styled from '@emotion/styled/macro';

export const LogoLink = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;

  text-decoration: none;
  font-family: Poppins;
  font-weight: 700;
  font-size: 22px;

  cursor: pointer;

  @media (min-width: 768px) {
    gap: 20px;

    font-size: 30px;
  }
`;

export const LogoImg = styled.img`
  display: block;
  width: 30px;
  height: auto;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
