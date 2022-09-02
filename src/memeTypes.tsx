export interface ITabsProps {
  tab: TabsState;
  setSelectedTab: (value: TabsState) => void;
}

export enum TabsState {
  MAIN = "MAIN",
  GENERATE = "GENERATE",
}
