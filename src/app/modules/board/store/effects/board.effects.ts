import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { BoardService } from '../../services/board.service';
import { BoardActionTypes } from '../actions/board.action';
import { Board } from '../../models/board.model';

@Injectable()
export class BoardEffects {
  constructor(private actions$: Actions, private boardService: BoardService) { }

  @Effect()
  public loadBoard$: Observable<any> = this.actions$.pipe(
    ofType(BoardActionTypes.LoadBoard),
    mergeMap((action: any) => zip(
      this.boardService.getBoardCards()
    ).pipe(
      map(([myBoardCards]) => {
        return {
          type: BoardActionTypes.LoadBoardSuccess,
          payload: this.formatResponse(myBoardCards)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myBoards?: Board[]): any {
    return {
      myBoards
    };
  }
}