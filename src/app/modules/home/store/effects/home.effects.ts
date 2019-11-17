import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { HomeActionTypes } from '../actions/home.actions';
import { HomeService } from '../../services/home.service';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { DueSoonest } from '../../models/due-soonest.model';
import { ContinueLearning } from '../../models/continue-learning.model';
import { RecommendedChannel } from '../../models/recommended-channel.model';
import { DiscoverNewTopic } from '../../models/discover-new-topic.model';
import { DiscussLearnings } from '../../models/discussLearnings.model';

export interface HomePayloadCollection {
  dueSoonest: DueSoonest[];
  continueLearning: ContinueLearning[];
  recommendedChannel: RecommendedChannel[];
  discoverNewTopic: DiscoverNewTopic[];
  discussLearnings: DiscussLearnings[];
}

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private homeService: HomeService) { }

  @Effect()
  public loadHome$: Observable<any> = this.actions$.pipe(
    ofType(HomeActionTypes.LoadHome),
    mergeMap((action: any) => zip(
      this.homeService.getDueSoonest(),
      this.homeService.getRecommendedChannel(),
      this.homeService.getDiscoverNewTopic(),
      this.homeService.getDiscussLearnings()
    ).pipe(
      map(([dueSoonest, recommendedChannel, discoverNewTopic, discussLearnings]) => {

        return {
          type: HomeActionTypes.LoadHomeSuccess,
          payload: this.formatResponse(dueSoonest, recommendedChannel, discoverNewTopic, discussLearnings)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    dueSoonest?: DueSoonest[],
    recommendedChannel?: RecommendedChannel[],
    discoverNewTopic?: DiscoverNewTopic[],
    discussLearnings?: DiscussLearnings[]): any {
    return {
      dueSoonest,
      recommendedChannel,
      discoverNewTopic,
      discussLearnings
    };
  }
}