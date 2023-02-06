import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';

import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { CssTextField, StyledForm } from './LoginForm.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(6).max(12).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
        <Button type="submit">LOG IN</Button>
      </StyledForm>
      <Button variant="secondarybutton" component={Link} to="/auth/register">
        Register
      </Button>
    </>
  );
};
