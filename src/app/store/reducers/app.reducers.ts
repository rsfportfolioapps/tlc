import { DiscoverNewTopic } from 'src/app/modules/home/models/discover-new-topic.model';
import { AppActions, AppActionTypes } from '../actions/app.action';
import { MyDiscussion } from 'src/app/modules/discussion/models/discussion.model';
import { ContinueLearning } from 'src/app/modules/home/models/continue-learning.model';
import { Learning } from 'src/app/modules/learning/models/learning.model';

export interface AppState {
  discoverNewTopic?: DiscoverNewTopic[];
  savedDiscussion?: MyDiscussion[];
  continueLearning?: ContinueLearning[];
  completedLearning?: Learning[];
}

const initialState: AppState = {
  discoverNewTopic: null,
  savedDiscussion: null,
  continueLearning: null,
  completedLearning: null
};

export function AppReducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LoadApp:
      return Object.assign({}, state);

    case AppActionTypes.LoadAppSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getDiscoverNewTopic = (state: AppState) => {
  return state['app'].discoverNewTopic;
};

export const getContinueLearning = (state: AppState) => {
  return state['app'].continueLearning;
};

export const getCompletedLearning = (state: AppState) => {
  return state['app'].completedLearning;
};

