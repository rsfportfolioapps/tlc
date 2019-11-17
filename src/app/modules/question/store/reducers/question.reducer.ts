import { QuestionActions, QuestionActionTypes } from '../actions/question.action';

export interface QuestionState {
  myAsssessment?: any[];
}

const initialState: QuestionState = {
  myAsssessment: null
};

export function QuestionReducer(state: QuestionState = initialState, action: QuestionActions): QuestionState {
  switch (action.type) {
    case QuestionActionTypes.LoadQuestion:
      return Object.assign({}, state);

    case QuestionActionTypes.LoadQuestionSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getQuestion = (state: QuestionState) => state.myAsssessment ? state.myAsssessment : null;