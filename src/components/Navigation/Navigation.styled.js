import styled from '@emotion/styled/macro';

export const NavItem = styled.ul`
  display: flex;
  justify-content: center;
  gap: 38px;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const IconWrapper = styled.div`
  height: 38px;
  width: 38px;

  fill: #6e78e8;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 23px;
  }
`;

export const TextEl = styled.span`
  display: none;

  fill: #6e78e8;

  @media screen and (min-width: 768px) {
    display: block;

    font-size: 18px;
    line-height: 1.5;
  }
`;

export const SvgEl = styled.svg`
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 23px;
  }
`;
