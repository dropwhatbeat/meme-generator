import { useEffect, useState } from "react";
import { IMemeProps } from "../../memeTypes";
import "./MemeContainer.scss";

const MemeContainer: React.FC<IMemeProps> = ({ saveMeme, selectedMeme }) => {
  const memeAPI = "https://meme-api.herokuapp.com/gimme/1";
  const [meme, setMeme] = useState("");
  const [text, setText] = useState("Meme Title");

  const getMeme = async () => {
    fetch(memeAPI)
      .then((response) => response.json())
      .then((data) => {
        setMeme(data.memes[0]?.url);
        setText(data.memes[0]?.title);
        (document.getElementById("saveMeme") as HTMLInputElement).value = "";
      });
  };

  useEffect(() => {
    getMeme();
  }, []);

  useEffect(() => {
    setMeme(Object.keys(selectedMeme)[0] as string);
    setText(Object.values(selectedMeme)[0] as string);
  }, [selectedMeme]);

  const onSaveMeme = async () => {
    var memeTitle = (document.getElementById("saveMeme") as HTMLInputElement)
      .value;
    if (meme !== "" && text !== "") {
      getMeme().then(() => {
        saveMeme({ [meme]: memeTitle ? memeTitle : text });
      });
    }
  };

  return (
    <div className="meme-view">
      <div className="content-container">
        <img src={meme} className="image" />
      </div>
      <div className="bottom-container">
        <div className="separator" />
        <input className="text-box" placeholder={text} id="saveMeme"></input>
        <div className="bottom-label">
          <button
            className="label-left"
            onClick={() => {
              onSaveMeme();
            }}
          >
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
