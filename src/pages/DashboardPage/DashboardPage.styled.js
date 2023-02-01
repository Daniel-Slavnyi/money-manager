import styled from '@emotion/styled/macro';

export const Section = styled.section`
  @media screen and (min-width: 1280px) {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -51px;
      display: block;
      height: 100%;
      width: 2px;
      background-color: #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const WrapCurency = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
