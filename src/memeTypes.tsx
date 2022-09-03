export interface ITabsProps {
  tab: TabsState;
  setSelectedTab: (value: TabsState) => void;
}

export enum TabsState {
  MAIN = "MAIN",
  GENERATE = "GENERATE",
}

export interface IFavProps {
  listData: IMemeType;
  deleteData: (text: string) => void;
  seeMeme: (meme: IMemeType) => void;
}

export interface IMemeProps {
  saveMeme: (meme: IMemeType) => void;
  selectedMeme: IMemeType;
}

export interface IFavList {
  favlist: IMemeType;
}
export interface IMemeType {
  [key: string]: string
}
