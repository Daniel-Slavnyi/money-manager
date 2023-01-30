import { styled, Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';

import { ReactComponent as ReactLogo } from 'styles/images/logo.svg';
import { ReactComponent as BgPicture } from 'styles/images/bgPicture.svg';
import {
  LogoContainer,
  PictureTextWrapper,
  PictureWrapper,
  StyledContainer,
  Wrapper,
} from './LoginPage.styled';

const BlurWrapper = styled('div')(({ theme }) => ({
  backdropFilter: 'blur(25px)',
  height: '100%',
}));

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
        <BlurWrapper>
          <Wrapper>
            <LogoContainer>
              <ReactLogo />
            </LogoContainer>
            <LoginForm />
          </Wrapper>
        </BlurWrapper>
      </section>
    </StyledContainer>
  );
}