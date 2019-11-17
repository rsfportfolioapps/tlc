import { createSelector } from '@ngrx/store';
import * as fromProcesses from '../reducers/processes.reducer';

export const ProcessesSelectorState = (state) => state.processes;

export const getProcessesSelector = createSelector(
  ProcessesSelectorState,
  fromProcesses.getMyProcesses
);

export const getProcessesLibrarySelector = createSelector(
  ProcessesSelectorState,
  fromProcesses.getProcessLibrary
);
