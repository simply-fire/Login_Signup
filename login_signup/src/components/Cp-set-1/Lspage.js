import './LSstyle.css'
import { useState } from 'react'
import axios from 'axios';

const Lspage = () => {



  const [Credentials, SetCred] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetCred({ ...Credentials, email: document.getElementById('eml').value, password: document.getElementById('pswd').value });
    const response = await axios.post("http://localhost:5000/LSpage/Login", Credentials);
    if (response.status === 200) {
      console.log("redirecting");
    }
  }

  const SetCredentials = () => {
    console.log(Credentials);
    SetCred({ ...Credentials, email: document.getElementById('eml').value, password: document.getElementById('pswd').value });
  }


  return (
    <div className='pgCont'>
      <div className='center'>
        <h1 id='mainh'>Login</h1>
        <form onSubmit={handleSubmit}>

          <div className='txt_field'>
            <input type='text' id='eml' onChange={SetCredentials} required />
            <span></span>
            <label>Email</label>
          </div>

          <div className='txt_field'>
            <input type='password' id='pswd' onChange={SetCredentials} required />
            <span></span>
            <label>Password</label>
          </div>

          <div className='pass'>Forgot Password?</div>

          <input type="submit" value="Login" />

          <div className='signup_link'>
            Not a member? <a href='./Spage'>Signup</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Lspage