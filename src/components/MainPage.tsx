import "./MainPage.scss";
import { useState } from "react";
import Favourites from "./navigation/Favourites";
import { IMemeType, TabsState } from "../memeTypes";
import MemeContainer from "./page-content/MemeContainer";
import TopBar from "./navigation/TopBar";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabsState.MAIN);
  const [favList, setFavList] = useState<{}>({});
  const [checkMeme, setCheckMeme] = useState({});

  const handleSave = (meme: IMemeType) => {
    const memeKey = Object.keys(meme)[0] as string;
    const memeValue = Object.values(meme)[0] as string;

    if (Object.keys(favList).includes(memeKey)) {
      let copy = { ...favList } as IMemeType;
      delete copy[memeKey];
      setFavList(() => ({ ...{ [memeKey]: memeValue }, ...copy }));
    } else {
      setFavList((favList) => ({ ...favList, ...{ [memeKey]: memeValue } }));
    }
    setCheckMeme("");
  };

  const handleDelete = (key: string) => {
    let copy = { ...favList } as IMemeType;
    delete copy[key];
    setFavList(() => ({ ...copy }));
  };

  return (
    <div className="main-page">
      <Favourites
        listData={favList}
        deleteData={(data) => {
          handleDelete(data);
        }}
        seeMeme={(meme) => setCheckMeme(meme)}
      />
      <TopBar
        tab={selectedTab}
        setSelectedTab={(state) => {
          setSelectedTab(state);
          console.error(selectedTab);
        }}
      />
      <div className="content">
        <MemeContainer
          saveMeme={(meme) => handleSave(meme)}
          selectedMeme={checkMeme}
        />
      </div>
    </div>
  );
};

export default MainPage;
