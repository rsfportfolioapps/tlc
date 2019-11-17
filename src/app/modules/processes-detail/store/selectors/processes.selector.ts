import { createSelector } from '@ngrx/store';
import * as fromProcessessDetail from '../reducers/processes-detail.reducer';

export const processesDetailSelectorState = (state) => state.processesDetail;

export const getRecommendedProcess = createSelector(
  processesDetailSelectorState,
  fromProcessessDetail.getRecommendedProcess

)