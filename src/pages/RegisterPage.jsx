import { Container, ThemeProvider } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import mainTheme from 'styles/theme';

export default function RegisterPage() {
  return (
    <>
      {' '}
      <ThemeProvider theme={mainTheme}>
        <Container>
          RegisterPage
          <RegistrationForm />{' '}
        </Container>
      </ThemeProvider>
    </>
  );
}
