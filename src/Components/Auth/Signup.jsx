import React, { useState } from 'react';
import './LoginSignUpPage.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic based on your requirements
    console.log('Signing up with phone number:', phoneNumber, 'password:', password, 'and image URL:', imageUrl);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
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
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className='toggle-link' onClick={()=>navigate('/login')}>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default SignUp;
