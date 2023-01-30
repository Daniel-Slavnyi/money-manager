import styled from 'styled-components';

const ImgStyled = styled.img`
  margit-left: 16px;
  margit-top: 30px;
`;
export { ImgStyled };

const HeaderStyled = styled.header`
  width: 100%;
  background-color: white;
`;
export { HeaderStyled };

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  background-color: white;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
    padding: 20px 16px;
  }
`;
export { ContainerStyled };

const LogoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export { LogoWrapperStyled };

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;
export { WrapperStyled };

const WalletStyled = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
`;
export { WalletStyled };

const NameStyled = styled.p`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: right;
  color: #bdbdbd;
`;
export { NameStyled };

const ExitStyled = styled.button`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  display: flex;
  align-items: stretch;
  padding: 4px 8px;
  border-color: transparent;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    display: none;
    margin-left: 21px;
  }
`;

export { ExitStyled };

const ExitPicStyled = styled.img`
  height: 30px;
  @media screen and (max-width: 767px) {
    margin-left: 8px;
  }
`;
export { ExitPicStyled };

const LineStyled = styled.img`
  height: 30px;
  margin-left: 12px;
  margin-right: 12px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export { LineStyled };
