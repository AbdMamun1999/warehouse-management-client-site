import React, { useState } from 'react';
import './Login.css'
import google from '../../images/social/google.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let errorMassage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    //   let from = location.state?.from?.pathname || "/";

    const handleEmail = event =>{
        const email = event.target.value;
        setEmail(email)
    }

    const handlePassword = event =>{
        const password = event.target.value;
        setPassword(password)
    }

    if(user){
        // navigate(from,{replace:true})
        navigate('/')
    }

    if(loading){
        return <Loading></Loading>
    }

    if(error){
        errorMassage=<p className='text-start text-danger'>Error: {error?.message}</p>
    }

    const handleLogin = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
        
    }


    return (
        <div className='login'>
            <div className="login-container">
                <h2 className='text-start mb-5'>Login</h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <input onBlur={handlePassword} type="password" name='password' placeholder='Password' required />
                   {errorMassage}
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