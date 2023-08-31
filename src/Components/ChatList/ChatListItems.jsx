import React from "react";
import "./ChatList.css";
import data from './chatListData'

const ChatListItems = ({setUser}) => {
  return (
    <>
      {data.map((obj) => {
        return (
          <div className="chat__list__items" onClick={()=>setUser(obj)}>
            <div className="chat__list__items__profile__img">
              <img
                src={obj.logo}
                alt="profile"
                srcset=""
              />
            </div>
            <div className="chat__list__items__details">
              <div className="chat__list__items__title">
                <h5>{obj.name}</h5>
                <h6>{obj.date}</h6>
              </div>
              <div>
                <p>Edappally</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChatListItems;
