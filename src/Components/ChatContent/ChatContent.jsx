import React, { useEffect, useRef, useState } from "react";
import ChatNav from "../ChatNav/ChatNav";
import "./ChatContent.css";
import data from "./chatData"; // Replace with your actual data from Redux
import UserDetails from "../UserDetails/UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import { setMessages } from "../../Redux/features/messages/messagesSlice";

let socket = io("http://localhost:5000");

console.log(socket);

socket.on("connect", () => {
  console.log("connected to socket");
});

const ChatContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chatMate = useSelector((state) => state.chatMate.data);
  const user = useSelector((state) => state.user.data.user);
  const messages = useSelector((state) => state.messages.data);
  const dispatch = useDispatch();
  const chatContainerRef = useRef(null);

  socket.on("receive_message", (data) => {
    if (data.receiverId == chatMate._id) {
      dispatch(setMessages([...messages, data]));
    }
    console.log("socket recieved message");
  });

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
      createdAt: new Date(),
    });
    axios.post("/messages/send", {
      content: inputMessage,
      senderId: user._id,
      receiverId: chatMate._id,
      isDelivered: false,
      isSeen: false,
    });
    setInputMessage("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    console.log("api useEffect");
  }, [socket]);

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
        <div className="chat__text__area" ref={chatContainerRef}>
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
            <input
              type="text"
              onChange={handleInput}
              value={inputMessage}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
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
