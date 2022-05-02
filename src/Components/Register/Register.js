import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h1>WELCOME TO WAREHOUSE MANAGEMENT</h1>
            <div className='register-container'>
                <h2>Sign Up</h2>
                <form>
                    <input type="email" name="email" id="" placeholder='Email' required />
                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input type="password" name="confirm-password" id="" placeholder='Confirmation Password' required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;