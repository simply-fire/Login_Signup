import './LSstyle.css'
import { useState } from 'react'
import axios from 'axios';
// import env from "react-dotenv";


const Spage = () => {

    const [Credentials, SetCred] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("email", document.getElementById('eml').value);
        SetCred({ ...Credentials, name: document.getElementById('usrnm').value, email: document.getElementById('eml').value, password: document.getElementById('pswd').value });
        const response = await axios.post("http://localhost:5000/LSpage/Signup", Credentials);
        if (response.status === 200) {
            console.log("redirecting");
            window.location.href = "/Otp";
        }
    }

    const SetCredentials = () => {
        console.log(Credentials);
        localStorage.setItem("email", document.getElementById('eml').value);
        SetCred({ ...Credentials, name: document.getElementById('usrnm').value, email: document.getElementById('eml').value, password: document.getElementById('pswd').value });
    }

    return (
        <div className='pgCont'>
            <div className='center'>
                <h1 id='mainh'>Signup</h1>
                <form onSubmit={handleSubmit}>

                    <div className='txt_field'>
                        <input type='text' id='usrnm' onChange={SetCredentials} required />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div className='txt_field'>
                        <input type='email' id='eml' onChange={SetCredentials} required />
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className='txt_field'>
                        <input type='password' id='pswd' onChange={SetCredentials} required minLength={6} maxLength={25} />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <input type="submit" value="Signup" />
                    {/* <button className="sub" onClick={master_login} >Signup</button> */}

                    <div className='signup_link'>
                        Already have an account? <a href='./Lspage'>Login</a>
                    </div>

                </form>

                {/* <div>
                    {JSON.stringify(Credentials)}
                </div> */}
            </div >
        </div>


    )
}

export default Spage