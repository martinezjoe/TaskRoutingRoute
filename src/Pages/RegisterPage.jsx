import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../Styles/RegisterStyles.css'
import { useNavigate, Link } from "react-router-dom";


const RegisterPage = () => {

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirm: "",
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

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .label("confirm password")
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm is required"),
  });

  return (
    <div>
      <h1> Register Form </h1>

      <Formik
        initialValues={initialValues}
        //* Yup Validation Shema
        validationSchema={registerSchema}
        //* onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          onRegister(values)
        }}
      >
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

            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}

            <label htmlFor="confirm"> Confirm </label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm your password"
              type="password"
              className="form-input"
            />

            {/* Confirm Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}

            <button type="submit" className="form-submit"> Register Account</button>
            {isSubmitting ? <p> Sending your credentials... </p> : null}
          </Form>
        )}
      </Formik>

      <h4> Do you have already an account? </h4>
			<p> You can loggin right here! </p>
			<a> <Link to="/login"> Login </Link> </a>
    </div>
  );
};

export default RegisterPage;
