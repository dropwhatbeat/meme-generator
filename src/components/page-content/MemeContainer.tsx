import { useEffect, useState } from "react";
import { IMemeProps } from "../../memeTypes";
import "./MemeContainer.scss";

const MemeContainer: React.FC<IMemeProps> = ({ saveMeme, selectedMeme }) => {
  const memeAPI = "https://meme-api.herokuapp.com/gimme/1";
  const [meme, setMeme] = useState("");
  const [text, setText] = useState("Meme Title");

  const getMeme = () => {
    fetch(memeAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeme(data.memes[0]?.url);
        setText(data.memes[0]?.title);
        (document.getElementById("saveMeme") as HTMLInputElement).value = "";
      });
  };

  useEffect(() => {
    getMeme()
  },[])


  useEffect(() =>{
    console.error("selected" + selectedMeme);
    setMeme(Object.keys(selectedMeme)[0] as string);
    setText(Object.values(selectedMeme)[0] as string)
  },[selectedMeme])


  const onSaveMeme = () => {
    var memeTitle = (document.getElementById("saveMeme") as HTMLInputElement)
      .value;
    saveMeme({ [meme]: memeTitle ? memeTitle : text });
    getMeme();
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
