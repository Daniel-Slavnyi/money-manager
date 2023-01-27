import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

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
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          label="E-mail"
          id="email"
          name="email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="standard"
          label="Password"
          id="password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          variant="standard"
          label="Confirm Password"
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
        <TextField
          variant="standard"
          label="Username"
          id="username"
          name="username"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Button variant="secondarybutton" href="/auth/login">
        Login
      </Button>
    </>
  );
};
