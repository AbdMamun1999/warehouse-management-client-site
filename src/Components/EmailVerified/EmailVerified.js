import { async } from '@firebase/util';
import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './EmailVerified.css'

const EmailVerified = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
    const emailVerified = async () => {
        await sendEmailVerification()
        toast('Send Email')
        console.log('email')
    }
    return (
        <div className='verified-email'>
            <div className='verified-card'>
                <h3>Please,verified your email!</h3>
                <button onClick={emailVerified}>Verified email</button>
            </div>
        </div>
    );
};

export default EmailVerified;