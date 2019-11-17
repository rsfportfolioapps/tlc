import { createSelector } from '@ngrx/store';
import * as fromDiscussion from '../reducers/discussion.reducer';

export const DiscussionSelectorState = (state) => state.discussion;

export const getMyDiscussionSelector = createSelector(
  DiscussionSelectorState,
  fromDiscussion.getMyDiscussions
);

export const getSavedDiscussionSelector = createSelector(
  DiscussionSelectorState,
  state => state.savedDiscussions
);

export const getNewestDiscussionSelector = createSelector(
  DiscussionSelectorState,
  fromDiscussion.getNewestDiscussion
);