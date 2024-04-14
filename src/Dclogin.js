import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import LogoImage from './KSPSigninlogo.png';
const Dclogin = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { userId, password });
      const { token } = response.data;
      
      localStorage.setItem('token', token);
      window.location.href = `http://localhost:5000/streamlit?token=${token}&userId=${userId}`;
    

      // switch (userId) {
      //   case '4444':
      //     window.location.href = 'http://localhost:8501/';
      //     // window.location.href = '/ACP';
      //     break;
      //   //Bagalkot ID
      //     case '1245':
      //     window.location.href = 'ACP';
      //     // window.location.href = '/ACP';
      //     break;

      //   case '5555':
      //     window.location.href = '/PI';
      //     break;
      //   case '6666':
      //     window.location.href = '/SI';
      //     break;
      //   default:
      //     break;
      // }
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="login-frame">
        <div className="left-side"></div>
        <div className="right-side">
          <img src={LogoImage} alt="Logo" className="logo" />
          <div className="login-form">
            <h3>The Key to happiness is to Sign In</h3>
            <h2>DSP Login</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <input type="text" placeholder="Enter ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="password" placeholder="Enter Passwod" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dclogin;



