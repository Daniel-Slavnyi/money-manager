import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selector';

import { Container } from '@mui/material';

import { ModalLogout } from 'components/ModalLogout/ModalLogout';

import { Logo } from '../Logo/Logo';
import sprite from '../../images/sprite.svg';
import {
  Head,
  HeaderWrapper,
  HeaderUserWrapper,
  UserNickName,
  ButtonExit,
  SvgEl,
  SpanEl,
} from './Header.styled';

export const Header = () => {
  const userName = useSelector(getUserName);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <Head>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderUserWrapper>
            <UserNickName>{userName}</UserNickName>
            <ButtonExit type="button" onClick={handleShow}>
              <SvgEl>
                <use href={sprite + '#icon-exit'}></use>
              </SvgEl>
              <SpanEl>Exit</SpanEl>
            </ButtonExit>
            {show && <ModalLogout handleClose={handleHide} />}
          </HeaderUserWrapper>
        </HeaderWrapper>
      </Container>
    </Head>
  );
};
