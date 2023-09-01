import React, { useState } from "react";
import "./LoginSignUpPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/features/user/userSlice";
import Axios from "axios"; // Import Axios for making API requests

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle errors

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login API with user credentials
      const response = await Axios.post("/auth/signin", {
        credentials: {
          phoneNumber,
          password,
        },
      });

      // Assuming the response contains user data
      const userData = response.data;

      // Dispatch the user data to the Redux store
      dispatch(setUser(userData));

      // Navigate to the home page or the desired route after successful login
      navigate("/");
    } catch (err) {
      // Handle login error
      setError("Invalid phone number or password"); // Set an error message
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="toggle-link" onClick={() => navigate("/signup")}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
