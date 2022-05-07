import React, { useState } from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import axios from 'axios';
import SocialLogin from '../SocialLogin/SocialLogin';

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

      let from = location.state?.from?.pathname || "/";

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
        
    }

    if(loading){
        return <Loading></Loading>
    }

    if(error){
        errorMassage=<p className='text-start text-danger'>Error: {error?.message}</p>
    }

    const handleLogin =async event =>{
        event.preventDefault()
        await signInWithEmailAndPassword(email,password)
        const {data} = await axios.post('https://ancient-fjord-07745.herokuapp.com/login',{email})
        console.log(data)
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from,{replace:true})
        
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

                <div className='d-flex align-items-end justify-content-end mt-3'>
                    <p className='fw-bold link'>
                        Are you new?<span>
                            <Link className='text-dark' to={'/register'}>Please register</Link></span>
                    </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;