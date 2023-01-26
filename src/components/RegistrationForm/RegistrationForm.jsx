import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email"></label>
            <Field
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              required
            />
            <label htmlFor="password"></label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <label htmlFor="confirmPassword"></label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}
            <label htmlFor="username"></label>
            <Field
              id="username"
              name="username"
              placeholder="First name"
              required
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/login">Login</Link>
    </>
  );
};
