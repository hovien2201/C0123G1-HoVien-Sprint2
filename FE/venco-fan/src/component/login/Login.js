import "../login/login.css"
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import * as Yup from "yup";
export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      navigate("/")
    }
    document.title = "Login";
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {/*--------------------- Main Container ------------------------*/}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {/*--------------------- Login Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/*------------------------- Left Box ---------------------------*/}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
           
          >
            <div >
              <figure>
                <img
                  src="quatnav.jpg"
                  alt="sing up image"
                />
              </figure>

            </div>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Again</h2>
                <p>We are happy to have you back.</p>
              </div>

              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  username: Yup.string().required("Please enter your account"),
                  password: Yup.string().required("Please enter a password"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const response = await axios.post("http://localhost:8080/api/user/authenticate", values, { withCredentials: true });
                    if (response.data.token) {
                      localStorage.setItem("token", response.data.token);
                      localStorage.setItem("username", response.data.username);
                      localStorage.setItem("role", response.data.role);
                    }
                    navigate("/");
                    window.location.reload()
                  } catch (er) {
                    toast.error(er.response.data);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <Form>
                  <div className="input-group mb-2">
                    <div className="input-group mb-1">
                      <Field
                        name="username"
                        type="text"
                        className="form-control form-control-lg bg-light fs-6"
                        placeholder="Username"
                      />
                    </div>
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="error-r mx-1"
                    />
                  </div>

                  <div className="input-group mb-2">
                    <div className="input-group">
                      <Field
                        name="password"
                        type="password"
                        className="form-control form-control-lg bg-light fs-6"
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error-r mx-1"
                    />
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="formCheck"
                      />
                      <label
                        htmlFor="formCheck"
                        className="form-check-label text-secondary"
                      >
                        <small>Remember Me</small>
                      </label>
                    </div>
                    <div className="forgot">
                      <small>
                        <NavLink to="/login/forgot">Forgot Password?</NavLink>
                      </small>
                    </div>
                  </div>
                  <div className="input-group mb-3 log">
                    <button style={{ background: "#6699FF" }}
                      className="btn btn-lg btn-info w-100 fs-6"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              </Formik>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img src="google.jpg" style={{ width: 20 }} className="me-2" />
                  <small>Sign In with Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have an account? <NavLink to='/singup'>Sign Up</NavLink>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  );
}