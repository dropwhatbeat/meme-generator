import "./MainPage.scss";
import { useState } from "react";
import Favourites from "./navigation/Favourites";
import { useEffect } from "react";
import { TabsState } from "../memeTypes";
import MemeContainer from "./page-content/MemeContainer";
import TopBar from "./navigation/TopBar";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabsState.MAIN);

  const [favList, setFavList] = useState([]);

  useEffect(() => {
    console.error(selectedTab);
  }, [selectedTab]);

  return (
    <div className="main-page">
      <Favourites
        listData={favList}
        deleteData={(data) => {
          setFavList(favList.filter((item) => item !== data));
        }}
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
          saveMeme={(text) => {
            setFavList(favList.concat(text));
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
