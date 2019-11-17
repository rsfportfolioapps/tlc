import { ProcessesDetailActionTypes, ProcessesDetailActions } from '../actions/processes-detail.actions';
import { RecommendedProcess } from '../../models/processes-detail.model';

export interface ProcessesDetailState {
  recommendedProcesses?: RecommendedProcess[]
}

const initialState: ProcessesDetailState = {
  recommendedProcesses: null
};

export function ProcessDetailReducer(state: ProcessesDetailState = initialState, action: ProcessesDetailActions): ProcessesDetailState {
  switch (action.type) {
    case ProcessesDetailActionTypes.LoadProcessesDetail:
      return Object.assign({}, state);

    case ProcessesDetailActionTypes.LoadProcessesDetailSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getRecommendedProcess = (state: ProcessesDetailState) => {
  return state.recommendedProcesses
}