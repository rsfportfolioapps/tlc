import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';
import { ActivityActionTypes } from '../actions/activity.actions';

@Injectable()
export class ActivityEffects {
  constructor(private actions$: Actions, private activityService: ActivityService) { }

  @Effect()
  public loadActivity$: Observable<any> = this.actions$.pipe(
    ofType(ActivityActionTypes.LoadActivity),
    mergeMap((action: any) => zip(
      this.activityService.getActivities()
    ).pipe(
      map(([myActivities]) => {
        return {
          type: ActivityActionTypes.LoadActivitySuccess,
          payload: this.formatResponse(myActivities)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myActivities?: Activity[]): any {
    return {
      myActivities
    };
  }
}
