import "./MainPage.scss";
import { useState } from "react";
import Favourites from "./navigation/Favourites";
import { useEffect } from "react";
import { TabsState } from "../memeTypes";
import MemeContainer from "./page-content/MemeContainer";
import TopBar from "./navigation/TopBar";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabsState.MAIN);
  const [favList, setFavList] = useState<any[]>([]);
  const [checkMeme, setCheckMeme] = useState("");

  useEffect(() => {
    console.error(selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    console.error(favList);
  }, [favList]);

  return (
    <div className="main-page">
      <Favourites
        listData={favList}
        deleteData={(data) => {
          setFavList(favList.filter((item) => item !== data));
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
          saveMeme={(meme) => {
            setFavList(favList.concat(meme));
            setCheckMeme("")
          }}
          selectedMeme={checkMeme}
        />
      </div>
    </div>
  );
};

export default MainPage;
