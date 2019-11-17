import { createSelector } from '@ngrx/store';
import * as fromAssessment from '../reducers/assessment.reducer';

export const AssessmentSelectorState = (state) => state.assessment;

export const getAssessmentSelector = createSelector(
  AssessmentSelectorState,
  fromAssessment.getAssessment
);