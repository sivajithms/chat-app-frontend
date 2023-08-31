import React from "react";
import "./ChatList.css";

const data = [
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },{
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
  {
    logo: "https://pps.whatsapp.net/v/t61.24694-24/344724134_259233253275818_744285044286412012_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSMle6rebhiUjD_ysb3lE-6idHTl88cxpgPz_Ia-M55aQ&oe=64FD24F4&_nc_cat=105",
    name: "Sivajith M S",
    date: "23/33/3333",
  },
];

const ChatListItems = () => {
  return (
    <>
      {data.map((obj) => {
        return (
          <div className="chat__list__items">
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
