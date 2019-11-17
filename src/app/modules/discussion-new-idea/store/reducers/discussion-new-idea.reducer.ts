import { DiscussionNewIdeaActionTypes, DiscussionNewIdeaActions } from '../actions/discussion-new-idea.actions';

export interface DiscussionNewIdeaState {
}

const initialState: DiscussionNewIdeaState = {
};

export function discussionNewIdeaReducer(state: DiscussionNewIdeaState = initialState, action: DiscussionNewIdeaActions): DiscussionNewIdeaState {
  switch (action.type) {
    default:
      return state;
  }
}
