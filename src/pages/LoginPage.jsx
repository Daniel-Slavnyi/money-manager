import { Container, ThemeProvider } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import mainTheme from 'styles/theme';

export default function LoginPage() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        LoginPage
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
}
