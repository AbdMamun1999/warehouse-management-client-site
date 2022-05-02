import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form>
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="password" name="confirm-password" id="" placeholder='Confirmation Password' required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Register;