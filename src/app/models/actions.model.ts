export interface Actions {
  icon?: string;
  text?: string;
  type?: ActionType;
}

export enum ActionType {
  save = 1,
  share = 2
}