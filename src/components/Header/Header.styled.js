import styled from '@emotion/styled/macro';

export const Head = styled.header`
  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

export const HeaderWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 32px;
  }

  @media (min-width: 1280px) {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }

  display: flex;
  justify-content: space-between;
  line-height: 1.5;
`;

export const HeaderUserWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const UserNickName = styled.span`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    border-right: 1px solid #bdbdbd;
    padding-right: 12px;
  }
`;

export const ButtonExit = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  font-family: 'Circe';
  font-size: 18px;
  background-color: transparent;
  border: transparent;
  outline: transparent;

  transition: color 250ms linear;
`;

export const LogOutButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;

  border: transparant;
  background-color: transparent;

  cursor: pointer;
`;
