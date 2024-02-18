import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { publicLinks } from "../constants/links";
import { Field, Form, Formik } from "formik";
import { useAuth } from "../firebase/auth";
import { toast } from "react-toastify";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container d-flex flex-column py-2"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h2 className="fw-bold">Log In to your Account</h2>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              try {
                await login(values);
                toast.success("Login Successful");
                navigate(publicLinks.Home);
              } catch (error) {
                toast.error("Login Failed");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="border py-3 px-3 mt-3 rounded shadow">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field className="form-control" type="email" name="email" />
                  {touched?.email && errors?.email && (
                    <div className="text-danger fst-italic fs-6">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                  />
                  {touched?.password && errors?.password && (
                    <div className="text-danger fst-italic fs-6">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"
                  >
                    Login
                  </button>
                </div>

                <div className="mb-3 text-center">
                  <Link to={publicLinks.Signup} className="fst-italic">
                    Create an account
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
