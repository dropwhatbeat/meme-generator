import { useEffect, useState } from "react";
import { IMemeProps } from "../../memeTypes";
import "./MemeContainer.scss";

const MemeContainer: React.FC<IMemeProps> = ({ saveMeme, selectedMeme }) => {
  const memeAPI = "https://meme-api.herokuapp.com/gimme/1";
  const [meme, setMeme] = useState("");
  const [text, setText] = useState("Meme Title");

  const getMeme = async () => {
    (document.getElementById("button") as HTMLButtonElement).disabled = true;
    fetch(memeAPI)
      .then((response) => response.json())
      .then((data) => {
        setMeme(data.memes[0]?.url);
        setText(data.memes[0]?.title);
        (document.getElementById("saveMeme") as HTMLInputElement).value = "";
        (document.getElementById("button") as HTMLButtonElement).disabled =
          false;
      });
  };

  useEffect(() => {
    if (meme === "") {
      getMeme();
    }
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
        <div className="image-wrapper">
          <img src={meme} className="image" />
        </div>
      </div>
      <div className="bottom-container">
        <input className="text-box" placeholder={text} id="saveMeme"></input>
        <div className="bottom-label">
          <button
            className="button"
            onClick={() => {
              onSaveMeme();
            }}
            id="saveButton"
          >
            SAVE MEME
          </button>
          <button
            className="button"
            onClick={() => {
              getMeme();
            }}
            id="button"
          >
            GET NEW MEME
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeContainer;
