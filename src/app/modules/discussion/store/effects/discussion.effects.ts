import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { DiscussionService } from '../../services/discussion.service';
import { DiscussionActionTypes } from '../actions/discussion.actions';
import { MyDiscussion } from '../../models/discussion.model';

export interface DiscussionPayloadCollection {
  myDiscussions?: MyDiscussion[];
  newestDiscussion?: MyDiscussion[];
}

@Injectable()
export class DiscussionEffects {
  constructor(private actions$: Actions, private discussionService: DiscussionService) { }

  @Effect()
  public loadDiscussion$: Observable<any> = this.actions$.pipe(
    ofType(DiscussionActionTypes.LoadDiscussion),
    mergeMap((action: any) => zip(
      this.discussionService.getMyDiscussions(),
      this.discussionService.getDiscussionNewest()
    ).pipe(
      map(([myDiscussions, newestDiscussion]) => {
  
        return {
          type: DiscussionActionTypes.LoadDiscussionSuccess,
          payload: this.formatResponse(myDiscussions, newestDiscussion)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myDiscussions?: MyDiscussion[],
    newestDiscussion?: MyDiscussion[]): DiscussionPayloadCollection {
    return {
      myDiscussions,
      newestDiscussion
    };
  }
}