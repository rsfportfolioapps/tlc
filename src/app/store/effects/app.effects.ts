import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DiscoverNewTopic } from 'src/app/modules/home/models/discover-new-topic.model';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { AppActionTypes, AppActions } from '../actions/app.action';
import { ContinueLearning } from 'src/app/modules/home/models/continue-learning.model';
import { LearningService } from 'src/app/modules/learning/services/learning.service';
import { Learning } from 'src/app/modules/learning/models/learning.model';

export interface AppPayloadCollection {
  discoverNewTopic: DiscoverNewTopic[];
  continueLearning: ContinueLearning[];
  completedLearning: Learning[];
}

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private learningService: LearningService, private homeService: HomeService) { }

  @Effect()
  public loadApp$: Observable<any> = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    mergeMap((action: AppActions) => zip(
      this.homeService.getDiscoverNewTopic(),
      this.homeService.getContinueLearning(),
      this.learningService.getCompletedLearning(),
    ).pipe(
      map(([discoverNewTopic, continueLearning, completedLearning]) => {
        return {
          type: AppActionTypes.LoadAppSuccess,
          payload: this.formatResponse(discoverNewTopic, continueLearning, completedLearning)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    discoverNewTopic?: DiscoverNewTopic[],
    continueLearning?: ContinueLearning[],
    completedLearning?: Learning[]): AppPayloadCollection {
    return {
      discoverNewTopic,
      continueLearning,
      completedLearning
    };
  }
}
