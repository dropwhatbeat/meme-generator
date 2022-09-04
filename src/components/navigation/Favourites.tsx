import React from "react";
import { IFavProps } from "../../memeTypes";
import "./Favourites.scss";
import bin from "../../assets/trash-can.png";

const Favourites: React.FC<IFavProps> = ({ listData, deleteData, seeMeme }) => {
  const handleDelete = (text: string) => {
    deleteData(text);
  };

  return (
    <div className="main-bar">
      <div className="header">Favourites</div>
      <div className="fav-container">
        {listData &&
          Object.keys(listData).map((data, index) => {
            return (
              <div className="fav-box" key={index}>
                <span
                  className="title"
                  onClick={() => seeMeme({ [data]: listData[data] })}
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
