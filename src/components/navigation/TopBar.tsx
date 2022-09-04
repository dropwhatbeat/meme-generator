import { ITabsProps, TabsState } from "../../memeTypes";
import "./TopBar.scss";

const TopBar: React.FC<ITabsProps> = (props: ITabsProps) => {
  const handleTabClick = (tab: TabsState) => {
    props.setSelectedTab(tab);
  };

  return (
    <div className="top-bar">
      <div className="header">Welcome!</div>
    </div>
  );
};

export default TopBar;
