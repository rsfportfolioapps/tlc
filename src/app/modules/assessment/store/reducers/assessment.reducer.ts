import { AssessmentActions, AssessmentActionTypes } from '../actions/assessment.action';

export interface AssessmentState {
  myAsssessment?: any[];
}

const initialState: AssessmentState = {
  myAsssessment: null
};

export function AssessmentReducer(state: AssessmentState = initialState, action: AssessmentActions): AssessmentState {
  switch (action.type) {
    case AssessmentActionTypes.LoadAssessment:
      return Object.assign({}, state);

    case AssessmentActionTypes.LoadAssessmentSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getAssessment = (state: AssessmentState) => state.myAsssessment ? state.myAsssessment : null;