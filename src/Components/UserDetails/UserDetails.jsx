import React, { useEffect } from "react";
import "./UserDetails.css";

const UserDetails = ({ chatMate,setIsVisible,isVisible }) => {

  useEffect(()=>{
    setIsVisible(true)
  },[setIsVisible])
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
          <img src={chatMate.profilePic} alt="" />
        </div>
        <h3>{chatMate.userName}</h3>
        <h4>{chatMate.phoneNumber}</h4>
      </div>
      <div className="user__about">
        <h5>About</h5>
        <h4>{chatMate.about}</h4>
      </div>
    </div>
  );
};

export default UserDetails;
