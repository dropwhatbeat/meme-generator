import React from "react";
import { IFavProps, SCROLL_TYPE } from "../../memeTypes";
import "./Favourites.scss";
import bin from "../../assets/trash-can.png";

export const updateScroll = (props: SCROLL_TYPE) => {
  var element = document.getElementById("fav-container") as HTMLElement;
  if (props === SCROLL_TYPE.DOWN) {
    element.scrollTop = element.scrollHeight;
  } else {
    element.scrollTop = 0;
  }
};

const Favourites: React.FC<IFavProps> = ({ listData, deleteData, seeMeme }) => {
  const handleDelete = (text: string) => {
    deleteData(text);
  };

  return (
    <div className="main-bar">
      <div className="header">Favourites</div>
      <div className="fav-container" id="fav-container">
        {listData &&
          Object.keys(listData).map((data, index) => {
            return (
              <div className="fav-box" key={index}>
                <span
                  className="title"
                  onClick={() => {
                    seeMeme({ [data]: listData[data] });
                  }}
                >
                  {listData[data]}
                </span>
                <img
                  src={bin}
                  className="bin"
                  alt="bin"
                  onClick={() => handleDelete(data)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favourites;
