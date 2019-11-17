import { Action } from '@ngrx/store';
import { BoardPayloadCollection } from '../../models/board.model';

export enum BoardActionTypes {
  LoadBoard = '[Load Board] Load Board',
  LoadBoardSuccess = '[Load Board] Load Board (success)'
}

export class LoadBoard implements Action {
  readonly type = BoardActionTypes.LoadBoard;
}

export class LoadBoardSuccess implements Action {
  readonly type = BoardActionTypes.LoadBoardSuccess;

  constructor(public payload: any) { }
}

export type BoardActions = LoadBoard | LoadBoardSuccess;
