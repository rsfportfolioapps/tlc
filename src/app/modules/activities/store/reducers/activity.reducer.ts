import { Activity } from '../../models/activity.model';
import { ActivityActions, ActivityActionTypes } from '../actions/activity.actions';

export interface ActivityState {
  myActivities?: Activity[];
}

const initialState: ActivityState = {
  myActivities: null,
};

export function ActivityReducer(state: ActivityState = initialState, action: ActivityActions): ActivityState {
  switch (action.type) {
    case ActivityActionTypes.LoadActivity:
      return Object.assign({}, state);

    case ActivityActionTypes.LoadActivitySuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getActivities = (state: ActivityState) => state.myActivities;

