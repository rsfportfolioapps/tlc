import { createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducers';

export const AppSelectorState = (state: fromApp.AppState) => state;

export const getDiscoverNewTopic = createSelector(
  AppSelectorState,
  fromApp.getDiscoverNewTopic
);

export const getContinueLearningSelector = createSelector(
  AppSelectorState,
  fromApp.getContinueLearning
);

export const getCompletedLearningSelector = createSelector(
  AppSelectorState,
  fromApp.getCompletedLearning
);
