import { Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';

import { ReactComponent as ReactLogo } from 'styles/pictures/logo.svg';
import { ReactComponent as BgPicture } from 'styles/pictures/bgPicture.svg';
import {
  LogoContainer,
  PictureTextWrapper,
  PictureWrapper,
  StyledContainer,
  Wrapper,
} from './LoginPage.styled';

export default function LoginPage() {
  return (
    <StyledContainer>
      <section>
        <PictureTextWrapper>
          <PictureWrapper>
            <BgPicture width="100%" height="100%" />
          </PictureWrapper>
          <Typography variant="h1" component="h1">
            Finance App
          </Typography>
        </PictureTextWrapper>
      </section>
      <section>
        <Wrapper>
          <LogoContainer>
            <ReactLogo />
          </LogoContainer>
          <LoginForm />
        </Wrapper>
      </section>
    </StyledContainer>
  );
}
