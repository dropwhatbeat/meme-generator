import React, { useEffect, useRef } from "react";
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

const Favourites: React.FC<IFavProps> = ({
  listData,
  deleteData,
  seeMeme,
  scroll,
}) => {
  const handleDelete = (text: string) => {
    deleteData(text);
  };
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const messagesStartRef = useRef<null | HTMLDivElement>(null);


  const scrollUp = () => {
    messagesStartRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }

  const scrollDown = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  useEffect(() => {
    if (scroll === SCROLL_TYPE.DOWN) {
      scrollDown();
    } else if (scroll === SCROLL_TYPE.UP) {
      scrollUp();
    }
  }, [listData, scroll]);

  return (
    <div className="main-bar">
      <div className="header">Favourites</div>

      <div className="fav-container" id="fav-container">
      <div ref={messagesStartRef} />

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
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Favourites;
