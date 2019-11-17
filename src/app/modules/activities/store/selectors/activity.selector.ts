import { createSelector } from '@ngrx/store';
import * as fromActivity from '../reducers/activity.reducer';

export const ActivitySelectorState = (state) => state.activity;

export const getActivitySelector = createSelector(
  ActivitySelectorState,
  fromActivity.getActivities
);
