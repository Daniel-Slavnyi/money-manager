import { Container, styled } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';

import { ReactComponent as ReactLogo } from '../styles/pictures/logo.svg';

const LogoContainer = styled('div')({
  margin: 'auto',
  marginTop: '107px',
  width: '50%',
});

export default function LoginPage() {
  return (
    <Container>
      <LogoContainer>
        <ReactLogo />
      </LogoContainer>
      <LoginForm />
    </Container>
  );
}
