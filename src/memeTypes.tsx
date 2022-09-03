export interface ITabsProps {
  tab: TabsState;
  setSelectedTab: (value: TabsState) => void;
}

export enum TabsState {
  MAIN = "MAIN",
  GENERATE = "GENERATE",
}

export interface IFavProps {
  listData: string[];
  deleteData: (text: string) => void;
}

export interface IMemeProps {
  saveMeme: (text: string) => void;
}
