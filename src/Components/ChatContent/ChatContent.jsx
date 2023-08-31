import React, { useState } from "react";
import ChatNav from "../ChatNav/ChatNav";
import "./ChatContent.css";
import data from "./chatData";
import UserDetails from "../UserDetails/UserDetails";

const ChatContent = ({ user }) => {
  const [isVisible,setIsVisible] = useState(false);
  console.log(user);
  return (
    <>
      <div className="chat__content__main">
        <div onClick={()=>setIsVisible(!isVisible)} style={{ cursor: 'pointer' }}>
          <ChatNav isContent={true} name={user ? user.name : ""} />
        </div>
        <div className="chat__text__area">
          <div className="chat__text__container">
            {data.map((obj, index) => {
              const chatTextClass = obj.received ? "left" : "right";

              return (
                <div className={`chat__text ${chatTextClass}`} key={index}>
                  <p>{obj.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="chat__input">
          <i className="fas fa-smile"></i>
          <i className="fas fa-plus"></i>
          <input type="text" />
          <i className="fas fa-microphone"></i>
        </div>
      </div>
      {isVisible && <UserDetails user={user} setIsVisible={setIsVisible} isVisible={isVisible}/>}
    </>
  );
};

export default ChatContent;
