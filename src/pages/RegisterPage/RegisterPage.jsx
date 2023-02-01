import { Typography } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import { ReactComponent as ReactLogo } from 'styles/images/logo.svg';
import { ReactComponent as BgPicture } from 'styles/images/bgPicture.svg';
import {
  LogoContainer,
  PictureTextWrapper,
  PictureWrapper,
  StyledContainer,
  Wrapper,
} from 'pages/LoginPage/LoginPage.styled';

export default function RegisterPage() {
  return (
    <>
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
            <RegistrationForm />
          </Wrapper>
        </section>
      </StyledContainer>
    </>
  );
}
