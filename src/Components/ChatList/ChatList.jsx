import React from "react";
import "./ChatList.css";
import ChatNav from "../ChatNav/ChatNav";
import ChatListItems from "./ChatListItems";

const ChatList = ({setUser}) => {
  return (
    <div className="chat__list__main">
      <ChatNav />
      <div className="chat__list__items__area">
        <ChatListItems setUser={setUser}/>
      </div>
    </div>
  );
};

export default ChatList;
