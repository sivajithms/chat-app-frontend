import React from "react";
import "./ChatList.css";
import { useSelector, useDispatch } from "react-redux";
import { setChatMate } from "../../Redux/features/chatMate/chatMateSLice";

const ChatListItems = () => {
  const data = useSelector((state) => state.allUsers.data);

  const dispatch = useDispatch();

  const handleChatMateClick = (obj) => {
    console.log('chatmate',obj);
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
