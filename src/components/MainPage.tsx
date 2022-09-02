import "./MainPage.scss";
import { useState } from "react";
import SideBar from "./navigation/SideBar";
import { useEffect } from "react";
import { TabsState } from "../memeTypes";
import MemeContainer from "./page-content/MemeContainer";
import TopBar from "./navigation/TopBar";

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabsState.MAIN);

  useEffect(() => {
    console.error(selectedTab);
  }, [selectedTab]);

  return (
    <div className="main-page">
      <SideBar />
      <TopBar
        tab={selectedTab}
          setSelectedTab={(state) => {
          setSelectedTab(state);
          console.error(selectedTab);
        }}
      />
      <div className="content">
        <MemeContainer />
      </div>
    </div>
  );
};

export default MainPage;
