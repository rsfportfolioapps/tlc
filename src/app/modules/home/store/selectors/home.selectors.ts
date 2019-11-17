import { createSelector } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

export const HomeSelectorState = (state) => state.home;

export const getDueSoonestSelector = createSelector(
	HomeSelectorState,
	fromHome.getDueSoonest
);

export const getRecommendedChannel = createSelector(
	HomeSelectorState,
	fromHome.getRecommendedChannel
);

export const getDiscoverNewTopic = createSelector(
	HomeSelectorState,
	fromHome.getDiscoverNewTopic
);

export const getDiscussLearnings = createSelector(
	HomeSelectorState,
	fromHome.discussLearnings
);

