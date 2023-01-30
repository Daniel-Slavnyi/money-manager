import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import logo from '../../images/logo.svg';
import exit from '../../images/exit.svg';
import line from '../../images/line.svg';
import {
  ImgStyled,
  WalletStyled,
  NameStyled,
  ExitStyled,
  HeaderStyled,
  ContainerStyled,
  WrapperStyled,
  LogoWrapperStyled,
  ExitPicStyled,
  LineStyled,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <HeaderStyled>
      <ContainerStyled>
        <LogoWrapperStyled>
          <ImgStyled src={logo} alt="Logo" width="40"></ImgStyled>

          <WalletStyled>Wallet</WalletStyled>
        </LogoWrapperStyled>
        <WrapperStyled>
          <NameStyled>Name</NameStyled>
          <LineStyled src={line} alt="Line"></LineStyled>

          <ExitPicStyled src={exit} alt="Exit" width="18"></ExitPicStyled>
          <ExitStyled type="button" onClick={handleClick}>
            Exit
          </ExitStyled>
        </WrapperStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
export default Header;

//Натискання на "Вийти" змінює прапорець у redux store:
//global.isModalLogoutOpen на true і повинні відкриватися модалка на вихід
