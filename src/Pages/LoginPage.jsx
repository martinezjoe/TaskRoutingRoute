import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import '../Styles/RegisterStyles.css'


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {

	const navigate = useNavigate();

  const initialCredentials = {
    email: "",
    password: "",
  };

	function onRegister (values) {
    navigate('/task', {
      replace: true,
      state: {
        email: values.email,
        password: values.password,
        logged: true
      }
    })
  }

  return (
    <div>
      <h1> Login Form </h1>

      <Formik
        //* Initial values that the form will take
        initialValues={initialCredentials}
        //* Yup Validation Shema
        validationSchema={loginSchema}
        //* OnSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          onRegister(values)
        }}
      >
        {/* We obtain props from Formik */}

        {({
          touched,
          errors,
          isSubmitting,
        }) => (
          <Form className="form">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="you@email.com"
							className="form-input"
            />

            {/* Email Errors */}

            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}

            <label htmlFor="password"> Password </label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
							className="form-input"
            />
            <button type="submit" className="form-submit" >Login</button>

            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            {isSubmitting ? <p> Login your credentials... </p> : null}
          </Form>
        )}
      </Formik>

			<h4> Don't you have an account? </h4>
			<p> You can register right here! </p>
			<a> <Link to="/register"> Register </Link> </a>
			
    </div>
  );
};

export default LoginPage;