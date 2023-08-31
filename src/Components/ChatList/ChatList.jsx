import React from "react";
import "./ChatList.css";
import ChatNav from "../ChatNav/ChatNav";
import ChatListItems from "./ChatListItems";

const ChatList = () => {
  return (
    <div className="chat__list__main">
      <ChatNav />
      <ChatListItems />
    </div>
  );
};

export default ChatList;
