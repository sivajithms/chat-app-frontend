import React from "react";
import "./ChatList.css";
import ChatNav from "../ChatNav/ChatNav";
import ChatListItems from "./ChatListItems";
import { useSelector } from "react-redux";

const ChatList = () => {
  const chatMate = useSelector((state) => state.user.data.user);

  return (
    <div className="chat__list__main">
      <ChatNav profilePic={chatMate && chatMate.profilePic}/>
      <div className="chat__list__items__area">
        <ChatListItems />
      </div>
    </div>
  );
};

export default ChatList;
