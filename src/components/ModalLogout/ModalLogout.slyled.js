import styled from '@emotion/styled/macro';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100vh;
  min-height: 100%;

  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 73px;
  width: 540px;

  background-color: #ffffff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    top: 45px;
    left: 200px;

    gap: 25px;
    padding: 15;
    min-width: 250px;
    height: 120px;
  }

  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 0px;
    width: 380px;
    height: 150px;
    padding: 10px 10px;
    gap: 30px;

    transform: translate(50%, 50%);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ButtonYes = styled.button`
  min-width: 80px;
  min-height: 35px;

  color: #ffffff;
  border: transparent;
  background-color: #24cca7;
  border-radius: 20px;

  :hover {
    background-color: #24cca7;

    cursor: pointer;
  }
`;

export const ButtonNo = styled.button`
  min-width: 80px;
  min-height: 35px;

  color: #c5baff;
  background-color: #fff;
  border: 1px solid #c5baff;
  border-radius: 20px;

  :hover {
    border-color: #24cca7;
    color: #24cca7;

    cursor: pointer;
  }
`;
