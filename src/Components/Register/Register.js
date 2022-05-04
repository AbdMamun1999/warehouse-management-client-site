import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfoirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate()


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    

    const handleEmail = event => {
        const email = event.target.value;
        setEmail(email)
    }

    const handlePassword = event => {
        const password = event.target.value;
        setPassword(password)
    }

    const hadleConfirmPassword = event => {
        const confirmPassword = event.target.value;
        setConfoirmPassword(confirmPassword)
    }

    if (user) {
        navigate('/')
    }

    const handleRegister = async event => {
        event.preventDefault()
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        } else {
            setPasswordError('Confirm password do not match')
        }

    }

    console.log(user)

    return (
        <div className='register'>
            <h1>WELCOME TO WAREHOUSE MANAGEMENT</h1>
            <div className='register-container'>
                <h2 className='mb-3'>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Email' required />
                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                    <input onBlur={hadleConfirmPassword} type="password" name="confirm-password" id="" placeholder='Confirmation Password' required />
                    <p className='error-massage'>{passwordError}</p>
                    <input type="submit" value="Submit" />
                </form>
                <div className='d-flex align-items-end justify-content-end mt-3'>
                    <p className='fw-bold link'>
                        Have already an account?<span>
                            <Link className='text-dark' to={'/login'}>Login here</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;