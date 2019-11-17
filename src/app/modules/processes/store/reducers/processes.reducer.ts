import { Processes } from '../../models/processes.model';
import { ProcessesActions, ProcessesActionTypes } from '../actions/processes.action';

export interface ProcessesState {
  myProcesses?: Processes[];
  processesLibrary: Processes[];
}

const initialState: ProcessesState = {
  myProcesses: null,
  processesLibrary: null
};

export function ProcessesReducer(state: ProcessesState = initialState, action: ProcessesActions): ProcessesState {
  switch (action.type) {
    case ProcessesActionTypes.LoadProcesses:
      return Object.assign({}, state);

    case ProcessesActionTypes.LoadProcessesSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getMyProcesses = (state: ProcessesState) => {
  return state.myProcesses ? state.myProcesses : [];
};

export const getProcessLibrary = (state: ProcessesState) => {
  return state.processesLibrary ? state.processesLibrary : [];
};
