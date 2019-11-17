import { BoardActionTypes, BoardActions } from '../actions/board.action';
import { Board } from '../../models/board.model';

export interface BoardState {
  myBoards?: Board[];
}

const initialState: BoardState = {
  myBoards: null
};

export function BoardReducer(state: BoardState = initialState, action: BoardActions): BoardState {
  switch (action.type) {
    case BoardActionTypes.LoadBoard:
      return Object.assign({}, state);

    case BoardActionTypes.LoadBoardSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getBoards = (state: BoardState) => {
  return state.myBoards;
};