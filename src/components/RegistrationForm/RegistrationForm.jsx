import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, InputAdornment } from '@mui/material';
import {
  CssTextField,
  StyledForm,
} from 'components/LoginForm/LoginForm.styled';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const RegistrationForm = () => {
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#BDBDBD' }} />
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
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
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
      <Button variant="secondarybutton" href="/money-manager/auth/login">
        Login
      </Button>
    </>
  );
};
