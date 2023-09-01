import React, { useEffect, useState } from "react";
import ChatNav from "../ChatNav/ChatNav";
import "./ChatContent.css";
import data from "./chatData"; // Replace with your actual data from Redux
import UserDetails from "../UserDetails/UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import { setMessages } from "../../Redux/features/messages/messagesSlice";

// http://localhost:5000

let socket = io("http://localhost:5000");

console.log(socket);

socket.on("connect", () => {
  console.log("connected to socket");
});

//Now Listen for Events (welcome event).
socket.on("receive_message", (data) => {
  console.log('received from soket');

});
socket.on("welcome", (data) => {
  /*For the listener we specify the event name and we give the callback to which be called one the 
  event is emitted*/

  //Log the Welcome message
  console.log("Message: ", data);
});

const ChatContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chatMate = useSelector((state) => state.chatMate.data);
  const user = useSelector((state) => state.user.data.user);
  const messages = useSelector((state) => state.messages.data);
  const dispatch = useDispatch();



  const [inputMessage, setInputMessage] = useState("");

  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSend = () => {
    socket.emit("send_message", {
      content: inputMessage,
      senderId: user._id,
      receiverId: chatMate._id,
      isDelivered: false,
      isSeen: false,
    });
    axios.post("/messages/send", {
      content: inputMessage,
      senderId: user._id,
      receiverId: chatMate._id,
      isDelivered: false,
      isSeen: false,
    });
  };

  useEffect(() => {
    console.log('socket triggeres');
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
  }, [socket, user._id, chatMate._id]);

  return (
    <>
      <div className="chat__content__main">
        <div
          onClick={() => setIsVisible(!isVisible)}
          style={{ cursor: "pointer" }}
        >
          <ChatNav
            isContent={true}
            name={chatMate ? chatMate.userName : ""}
            profilePic={chatMate ? chatMate.profilePic : ""}
          />
        </div>
        <div className="chat__text__area">
          <div className="chat__text__container">
            {messages.map((message) => {
              const chatTextClass =
                message.senderId === user._id ? "right" : "left";

              return (
                <div
                  className={`chat__text ${chatTextClass}`}
                  key={message._id}
                >
                  <p>{message.content}</p>
                  {message.isDelivered && !message.isSeen && (
                    <span className="delivery-indicator">Delivered</span>
                  )}
                  {message.isSeen && (
                    <span className="seen-indicator">Seen</span>
                  )}
                  <span className="timestamp">
                    {formatTimestamp(message.createdAt)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="chat__input">
          <i className="fas fa-smile"></i>
          <i className="fas fa-plus"></i>
          <div className="text__input__area">
            <input type="text" onChange={handleInput} />
            <i className="fas fa-paper-plane" onClick={handleSend}></i>{" "}
            {/* Add the send icon */}
          </div>
          <i className="fas fa-microphone"></i>
        </div>
      </div>
      {isVisible && (
        <UserDetails
          chatMate={chatMate}
          setIsVisible={setIsVisible}
          isVisible={isVisible}
        />
      )}
    </>
  );
};

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

export default ChatContent;
