import { RankActionTypes, RankActions } from '../actions/rank.action';
import { Rank } from '../../models/rank.model';

export interface RankState {
 myRanks?: Rank[];
}

const initialState: RankState = {
  myRanks: null
};

export function RankReducer(state: RankState = initialState, action: RankActions): RankState {
  switch (action.type) {
    case RankActionTypes.LoadRank:
      return Object.assign({}, state);

    case RankActionTypes.LoadRankSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getRanks = (state: RankState) => {
  return state.myRanks;
};