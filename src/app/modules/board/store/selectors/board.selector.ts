import { createSelector } from '@ngrx/store';
import * as fromBoard from '../reducers/board.reducer';

export const BoardSelectorState = (state) => state.board;

export const getBoardSelector = createSelector(
  BoardSelectorState,
	fromBoard.getBoards
);
