import React, { useState } from "react";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import SocialLogin from "../SocialLogin/SocialLogin";
import bg from "../../images/bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorMassage;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || "/";

  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorMassage = (
      <p className="text-start text-danger">Error: {error?.message}</p>
    );
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://warehouse-management-server-zahd.onrender.com/login",
      { email }
    );

    localStorage.setItem("accessToken", data.accessToken);
  };

  return (
    <section
      className=" d-flex justify-content-center align-items-center "
      style={{
        height: "93vh",
        backgroundColor: "#06283D",
        /*  backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",  */
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-4 ">
            <div>
              <h1 className="text-white fw-bold" style={{ fontSize: "70px" }}>
                Welcome <br />
                Back
              </h1>
              <p className="text-white fw-bold">
                It is a establised fact that a reader will be distracted by the
                readable content of a page when looking at its layout.The point
                of using
              </p>
            </div>
            {/* social */}
            <div>
              <SocialLogin />
            </div>
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <label
                className="form-label text-white fw-bold"
                htmlFor="form3Example3"
              >
                Email address
              </label>
              <div className="form-outline mb-4">
                <input
                  onBlur={handleEmail}
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  required
                />
              </div>

              <div className="form-outline mb-3">
                <label
                  className="form-label text-white fw-bold"
                  htmlFor="form3Example4 text-white"
                >
                  Password
                </label>
                <input
                  onBlur={handlePassword}
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <p>{errorMassage}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#!" className="text-body fw-bold">
                  <span className="text-white">Forgot password?</span>
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0 text-white">
                  Don't have an account?{" "}
                  <Link href="#!" className="link-danger" to={"/register"}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

