import { HomeActionTypes, HomeActions } from '../actions/home.actions';
import { DueSoonest } from '../../models/due-soonest.model';
import { ContinueLearning } from '../../models/continue-learning.model';
import { RecommendedChannel } from '../../models/recommended-channel.model';
import { DiscoverNewTopic } from '../../models/discover-new-topic.model';
import { DiscussLearnings } from '../../models/discussLearnings.model';

export interface HomeState {
  dueSoonest: DueSoonest[];
  recommendedChannel: RecommendedChannel[];
  discoverNewTopic: DiscoverNewTopic[];
  discussLearnings: DiscussLearnings[];
}

const initialState: HomeState = {
  dueSoonest: null,
  recommendedChannel: null,
  discoverNewTopic: null,
  discussLearnings: null
};

export function HomeReducer(state: HomeState = initialState, action: HomeActions): HomeState {
  switch (action.type) {
    case HomeActionTypes.LoadHome:
      return Object.assign({}, state);

    case HomeActionTypes.LoadHomeSuccess:
      return Object.assign({}, action.payload);

    default:
      return state;
  }
}

export const getDueSoonest = (state: HomeState) => state.dueSoonest;
export const getRecommendedChannel = (state: HomeState) => state.recommendedChannel;
export const getDiscoverNewTopic = (state: HomeState) => state.discoverNewTopic;
export const discussLearnings = (state: HomeState) => state.discussLearnings;