export interface ITabsProps {
  tab: TabsState;
  setSelectedTab: (value: TabsState) => void;
}

export enum TabsState {
  MAIN = "MAIN",
  GENERATE = "GENERATE",
}

export interface IFavProps {
  listData: any[];
  deleteData: (text: string) => void;
  seeMeme: (url: string) => void;
}

export interface IMemeProps {
  saveMeme: (meme: {}) => void;
  selectedMeme: {};
}

export interface IFavList {
  favlist: any[];
}

export interface IMemeType {
  url: string;
  title: string;
}
