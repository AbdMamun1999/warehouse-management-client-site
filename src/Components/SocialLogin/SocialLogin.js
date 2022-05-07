import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/social/google.png'

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoogle()
    }

    return (
        <div>
            <div className="social-login">
                <div>
                    <button onClick={handleGoogleLogin}>
                        <img src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;