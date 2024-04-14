import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import LogoImage from './KSPSigninlogo.png';
// import Cookies from 'universal-cookie';
const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const cookies = new Cookies();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { userId, password });
      const { token } = response.data;
      
     localStorage.setItem('token', token);
    //  // cookies.set('token', token, { path: '/' });
    //   window.location.href = `http://localhost:5000/streamlit?token=${token}`;
    window.location.href = `http://localhost:5000/streamlit?token=${token}&userId=${userId}`;
    
      // switch (userId) {
      //   //Bagalkot ID
      //     case '1245':
      //       window.location.href = 'http://localhost:8502/';
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
            <h2>Police Station Login</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <input type="text" placeholder="Enter Station ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginForm.css';
// import LogoImage from './KSPSigninlogo.png';

// const LoginForm= () => {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', { userId, password });
//       const { token } = response.data;
      
//       localStorage.setItem('token', token);

//       const unitId = response.data.userId; // Replace 'your_unit_id' with the actual unit ID from your data
//       const streamlitResponse = await axios.post('http://localhost:8501/', { unit_id: unitId });
//       //if (streamlitResponse.status === 200) {
//         // Redirect to the Streamlit page
//       window.location.href = 'http://localhost:8501/'; // Change the URL to your Streamlit page
//       //}
//     } catch (error) {
//       setErrorMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-frame">
//         <div className="left-side"></div>
//         <div className="right-side">
//           <img src={LogoImage} alt="Logo" className="logo" />
//           <div className="login-form">
//             <h3>The Key to happiness is to Sign In</h3>
//             <h2>Police Station Login</h2>
//             {errorMessage && <p>{errorMessage}</p>}
//             <input type="text" placeholder="Enter ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
//             <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;