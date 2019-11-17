import { Action } from '@ngrx/store';

export enum RankActionTypes {
  LoadRank = '[Load Rank] Load Rank',
  LoadRankSuccess = '[Load Rank] Load Rank (success)'
}

export class LoadRank implements Action {
  readonly type = RankActionTypes.LoadRank;
}

export class LoadRankSuccess implements Action {
  readonly type = RankActionTypes.LoadRankSuccess;

  constructor(public payload: any) { }
}

export type RankActions = LoadRank | LoadRankSuccess;
