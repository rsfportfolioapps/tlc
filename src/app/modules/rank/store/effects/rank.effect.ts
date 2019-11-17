import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { RankService } from '../../services/rank.service';
import { RankActionTypes } from '../actions/rank.action';
import { Rank } from '../../models/rank.model';

@Injectable()
export class RankEffects {
  constructor(private actions$: Actions, private rankService: RankService) { }

  @Effect()
  public loadRank$: Observable<any> = this.actions$.pipe(
    ofType(RankActionTypes.LoadRank),
    mergeMap((action: any) => zip(
      this.rankService.getRanks()
    ).pipe(
      map(([myRanks]) => {
        return {
          type: RankActionTypes.LoadRankSuccess,
          payload: this.formatResponse(myRanks)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myRanks?: Rank[]): any {
    return {
      myRanks
    };
  }
}