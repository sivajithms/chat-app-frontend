import React from "react";
import "./ChatNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComment } from "@fortawesome/free-solid-svg-icons";

const ChatNav = (props) => {
  return (
    <>
      <div className="chat__nav__main">
        <div className="profile__img">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105"
            alt=""
          />
        </div>
        <div className="nav__menu">
          {props.isContent ? "" : <FontAwesomeIcon icon={faComment} />}
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {props.isContent ? (
        ""
      ) : (
        <div className="nav__search__body">
          <div className="nav__search">search or start new chat</div>
        </div>
      )}
    </>
  );
};

export default ChatNav;
