import React, { useState } from 'react';
import './LoginSignUpPage.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or sign up logic based on your requirements
    console.log('Logging in with phone number:', phoneNumber, 'and password:', password);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel" /* Use type "tel" for phone number input */
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className='toggle-link' onClick={()=>navigate('/signup')}>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
