import { createSelector } from '@ngrx/store';
import * as fromLearning from '../reducers/learning.reducer';

export const LearningSelectorState = (state) => state.learning;

export const getAssignLearningSelector = createSelector(
  LearningSelectorState,
  fromLearning.getaAssignedLearning
);

export const getLearnMoreSelector = createSelector(
  LearningSelectorState,
  fromLearning.getLearnMore
);