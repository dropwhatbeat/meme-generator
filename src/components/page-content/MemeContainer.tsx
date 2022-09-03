import { useEffect, useState } from "react";
import { IMemeProps } from "../../memeTypes";
import "./MemeContainer.scss";

const MemeContainer: React.FC<IMemeProps> = ({ saveMeme }) => {
  const memeAPI = "https://meme-api.herokuapp.com/gimme/1";
  const [meme, setMeme] = useState("");
  const [text, setText] = useState("");
  const memeTitle = document.getElementById("saveMeme") as HTMLInputElement;

  const getMeme = () => {
    fetch(memeAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeme(data.memes[0]?.url);
        setText(data.memes[0]?.title);
      });
    memeTitle.value = "";
  };
  useEffect(() => {
    getMeme();
  }, []);

  const onSaveMeme = () => {
    setText(memeTitle.value);
  };

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
          id="saveMeme"
          onChange={() => onSaveMeme()}
        ></input>
        <div className="bottom-label">
          <button className="label-left" onClick={() => saveMeme(text)}>
            SAVE MEME
          </button>
          <button className="label-right" onClick={() => getMeme()}>
            GET NEW MEME
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeContainer;
