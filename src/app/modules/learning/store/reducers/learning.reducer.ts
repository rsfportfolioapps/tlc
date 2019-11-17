import { LearningActionTypes, LearningActions } from '../actions/learning.actions';
import { Learning } from '../../models/learning.model';

export interface LearningState {
  assignedLearning?: Learning[];
  completedLearning?: Learning[];
  learnMore?: Learning[];
}

const initialState: LearningState = {
  assignedLearning: null,
  completedLearning: null,
  learnMore: null
};

export function LearningReducer(state: LearningState = initialState, action: LearningActions): LearningState {
  switch (action.type) {
    case LearningActionTypes.LoadLearning:
      return Object.assign({}, state);

    case LearningActionTypes.LoadLearningSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getaAssignedLearning = (state: LearningState) => state.assignedLearning;
export const getCompletedLearning = (state: LearningState) => state.completedLearning;
export const getLearnMore = (state: LearningState) => state.learnMore;