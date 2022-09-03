import "./MainPage.scss";
import { useState } from "react";
import Favourites from "./navigation/Favourites";
import { IFavList, IMemeType, TabsState } from "../memeTypes";
import MemeContainer from "./page-content/MemeContainer";
import TopBar from "./navigation/TopBar";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabsState.MAIN);
  const [favList, setFavList] = useState<any | IFavList>({});
  const [checkMeme, setCheckMeme] = useState({});

  const handleSave = (meme: IMemeType) => {
    const memeKey = Object.keys(meme)[0] as string;
    const memeValue = Object.values(meme)[0] as string;

    if (memeKey && memeValue) {
      if (
        Object.keys(favList).includes(memeKey) &&
        memeValue !== (favList[memeKey] as string)
      ) {
        let copy = { ...favList } as IMemeType;
        delete copy[memeKey];
        setFavList(() => ({ ...{ [memeKey]: memeValue }, ...copy }));
      } else {
        setFavList((favList: IFavList) => ({
          ...favList,
          ...{ [memeKey]: memeValue },
        }));
      }
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
