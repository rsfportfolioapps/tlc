import { createSelector } from '@ngrx/store';
import * as fromRank from '../reducers/rank.reducer';

export const RankSelectorState = (state) => state.rank;

export const getRankSelector = createSelector(
  RankSelectorState,
  fromRank.getRanks
);
