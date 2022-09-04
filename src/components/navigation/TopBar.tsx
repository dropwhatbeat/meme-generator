import { ITabsProps, TabsState } from "../../memeTypes";
import "./TopBar.scss";

const TopBar: React.FC<ITabsProps> = (props: ITabsProps) => {
  const handleTabClick = (tab: TabsState) => {
    props.setSelectedTab(tab);
  };

  return (
    <div className="top-bar">
      <div className="header">Welcome!</div>
      <div className="tabs-container">
        <span
          className={`tab_${props.tab === TabsState.MAIN}`}
          onClick={() => handleTabClick(TabsState.MAIN)}
        >
          Generate Meme
        </span>
      </div>
    </div>
  );
};

export default TopBar;
