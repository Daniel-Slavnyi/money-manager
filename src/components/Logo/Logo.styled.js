import styled from '@emotion/styled/macro';

export const LogoLink = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  line-height: 1.5;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
