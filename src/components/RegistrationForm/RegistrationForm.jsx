import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, IconButton, InputAdornment } from '@mui/material';
import {
  CssTextField,
  StyledForm,
} from 'components/LoginForm/LoginForm.styled';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PasswordStrengthMeter from './PasswordStrengthMeter/PasswordStrengthMeter';
import { useState } from 'react';

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const schema = Yup.object().shape({
    username: Yup.string().min(1).max(12).required(),
    email: Yup.string().email(),
    password: Yup.string().min(6).max(12).required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = ({ email, password, username }, { resetForm }) => {
    dispatch(register({ email, password, username }));
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <CssTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#BDBDBD' }} />
              </InputAdornment>
            ),
          }}
          margin="normal"
          placeholder="E-mail"
          id="email"
          name="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <CssTextField
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#BDBDBD' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          margin="normal"
          placeholder="Password"
          id="password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <CssTextField
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#BDBDBD' }} />
              </InputAdornment>
            ),
          }}
          margin="normal"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={formik.values.confirmPassword}
          onChange={event => {
            formik.handleChange(event);
            setPasswordStrength(event.target.value);
          }}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        {passwordStrength && (
          <PasswordStrengthMeter password={passwordStrength} />
        )}
        <CssTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon sx={{ color: '#BDBDBD' }} />
              </InputAdornment>
            ),
          }}
          margin="normal"
          placeholder="Username"
          id="username"
          name="username"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <Button type="submit">REGISTER</Button>
      </StyledForm>
      <Button variant="secondarybutton" component={Link} to="/auth/login">
        Log In
      </Button>
    </>
  );
};
