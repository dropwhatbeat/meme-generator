import { useEffect, useState } from "react";
import "./MemeContainer.scss";

const MemeContainer: React.FC = () => {
  const memeAPI = "https://meme-api.herokuapp.com/gimme/1";
  const [meme, setMeme] = useState("");
  const [text, setText] = useState("");
  const getMeme = () => {
    fetch(memeAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeme(data.memes[0]?.url);
        setText(data.memes[0]?.title);
      });
  };
  useEffect(() => {
    getMeme();
  }, []);

  return (
    <div className="meme-view">
      <div className="content-container">
        <img src={meme} className="image" />
      </div>
      <div className="bottom-container">
        <div className="separator" />
        <input
          className="text-box"
          placeholder={text ? text : "Meme Title"}
        ></input>
        <div className="bottom-label">
          <button className="label-left">SAVE MEME</button>
          <button className="label-right" onClick={() => getMeme()}>
            GET NEW MEME
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeContainer;
