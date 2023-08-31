import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  const [isVisible, setIsVisible] = useState(true);

  function handleClose() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null; // Return nothing if component is not visible
  }

  return (
    <div className="user__details__main">
      <div className="user__details__nav">
        <i className="fas fa-times" onClick={handleClose}></i>
        Contact Info
      </div>
      <div className="user__profile__details">
        <div className="user__profile__image">
          <img src={user.logo} alt="" />
        </div>
        <h3>{user.name}</h3>
        <h4>9744496316</h4>
      </div>
      <div className="user__about">
        <h5>About</h5>
        <h4>Urgent calls only</h4>
      </div>
    </div>
  );
};

export default UserDetails;
