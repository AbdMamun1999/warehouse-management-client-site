import React from 'react';
import './Login.css'
import google from '../../images/social/google.png'

const Login = () => {
    return (
        <div className='login'>
            <div className="login-container">
                <h2 className='text-start mb-5'>Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name='password' placeholder='Password' required />
                    <input type="submit" value="Login" />
                </form>
                <div className='horizental-line'>
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </div>
                <div className="social-login">
                    <div>
                       <button>
                           <img src={google} alt="" />
                       </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;