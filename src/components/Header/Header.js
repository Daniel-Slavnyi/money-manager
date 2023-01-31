import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { getUserName } from 'redux/auth/auth-selector';
import { IconContext } from 'react-icons';
import { TbLogout } from 'react-icons/tb';
import { Logo } from '../Logo/Logo';

import {
  Head,
  HeaderWrapper,
  HeaderUserWrapper,
  UserNickName,
  ButtonExit,
} from './Header.styled';

export const Header = () => {
  const userName = useSelector(getUserName);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <Head>
      <HeaderWrapper>
        <Logo />
        <HeaderUserWrapper>
          <UserNickName>{userName}</UserNickName>
          <ButtonExit type="button" onClick={handleShow}>
            <IconContext.Provider value={{ className: 'icon' }}>
              <TbLogout />
            </IconContext.Provider>
            <span>Exit</span>
          </ButtonExit>
          {show && <ModalLogout handleClose={handleHide} />}
        </HeaderUserWrapper>
      </HeaderWrapper>
    </Head>
  );
};
