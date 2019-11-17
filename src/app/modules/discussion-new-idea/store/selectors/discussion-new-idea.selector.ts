import { createSelector } from '@ngrx/store';
import * as fromDiscussionNewIdea from '../reducers/discussion-new-idea.reducer';

export const discussionNewIdeaSelectorState = (state) => state.discussionNewIdea;