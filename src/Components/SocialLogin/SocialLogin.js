import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
      <p className="lead fw-normal mb-0 me-3 fw-bold text-danger">
        Sign in with
      </p>
      <button onClick={handleGoogleLogin} type="button" 
      className="btn btn-white btn-floating mx-1"
      >
        <FcGoogle size={30}/>
      </button>

     {/*  <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>

      <button type="button" className="btn btn-primary btn-floating mx-1">
        <i className="fab fa-linkedin-in"></i>
      </button> */}
    </div>
  );
};

export default SocialLogin;
