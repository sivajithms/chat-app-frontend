import React from "react";
import "./ChatList.css";
import { useSelector, useDispatch } from "react-redux";
import { setChatMate } from "../../Redux/features/chatMate/chatMateSLice";
import axios from "axios";
import { setMessages } from "../../Redux/features/messages/messagesSlice";

const ChatListItems = () => {
  const data = useSelector((state) => state.allUsers.data);
  const user = useSelector((state) => state.user.data.user);
  const chatMate = useSelector((state) => state.chatMate.data);

  const dispatch = useDispatch();

  const handleChatMateClick = (obj) => {
    console.log('chatmate',obj);
    axios
    .get("/messages/getMessages", {
      params: { senderId: user._id, receiverId: chatMate._id },
    })
    .then((response) => {
      dispatch(setMessages(response.data));
    })
    .catch((error) => {
      console.error("Error fetching messages:", error);
    });
    dispatch(setChatMate(obj));
  };

  return (
    <>
      {data.map((obj) => (
        <div
          key={obj.id} // Use a unique key
          className="chat__list__items"
          onClick={() => handleChatMateClick(obj)}
        >
          <div className="chat__list__items__profile__img">
            <img src={obj.profilePic} alt="profile" />
          </div>
          <div className="chat__list__items__details">
            <div className="chat__list__items__title">
              <h5>{obj.userName}</h5>
              <h6>{obj.date}</h6>
            </div>
            <div>
              <p>{obj.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatListItems;
