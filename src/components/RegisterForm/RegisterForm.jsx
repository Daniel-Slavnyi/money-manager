import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

export default function RegisterForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field type="text" name="name" />
          <span>Name</span>
          <ErrorMessage name="name" />
        </label>
        <label>
          <Field type="email" name="email" />
          <span>E-meil</span>
          <ErrorMessage name="email" />
        </label>
        <label>
          <Field type="password" name="password" />
          <span>Password</span>
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
