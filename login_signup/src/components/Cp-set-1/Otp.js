import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './LSstyle.css';

const Otp = () => {

    const [Credentials, SetCred] = useState({ otp: '', email: localStorage.getItem("email") });

    const master_login = () => {
        SetCred({ ...Credentials, otp: document.getElementById('otp').value });
        axios.post("http://localhost:5000/LSpage/Verify", Credentials);
    }

    const SetCredentials = () => {
        SetCred({ ...Credentials, otp: document.getElementById('otp').value });
    }

    return (
        <div className='pgCont'>
            <div className='center'>
                <h1 id='mainh'>OTP</h1>
                <form onSubmit={master_login}>
                    <div className='txt_field'>
                        <input type='password' id='otp' required maxLength={6} minLength={6} onChange={SetCredentials} />
                        <span></span>
                        <label>OTP</label>
                    </div>
                    <input type='submit' value='Verify' />
                </form>
            </div >
        </div>
    )
}

export default Otp