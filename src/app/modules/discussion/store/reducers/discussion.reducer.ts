import { DiscussionActionTypes, DiscussionActions } from '../actions/discussion.actions';
import { MyDiscussion } from '../../models/discussion.model';
export interface DiscussionState {
  myDiscussions?: MyDiscussion[];
  savedDiscussions?: MyDiscussion[];
  newestDiscussion?: MyDiscussion[];
}

const initialState: DiscussionState = {
  myDiscussions: null,
  savedDiscussions: [],
  newestDiscussion: null,
};

export function DiscussionReducer(state: DiscussionState = initialState, action: DiscussionActions): DiscussionState {
  switch (action.type) {
    case DiscussionActionTypes.LoadDiscussion:
      return Object.assign({}, state);

    case DiscussionActionTypes.LoadDiscussionSuccess:
      return Object.assign({}, action.payload);

    case DiscussionActionTypes.SaveDiscussion:
      return Object.assign({}, state, {
        savedDiscussions:
          state.savedDiscussions ?
            setSavedDiscussions(state, action.payload)
            : [action.payload]
      });

    default:
      return state;
  }
}

function setSavedDiscussions(state: any, discussion: any) {
  return !state.savedDiscussions.includes(discussion) ?
    [...state.savedDiscussions, discussion] : removeArrItem(state.savedDiscussions, discussion);
}

function removeArrItem(arr, itemToRemove) {
  const index = arr.indexOf(itemToRemove);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const getMyDiscussions = (state: DiscussionState) => {
  return state.myDiscussions.filter(x => {
    return state.savedDiscussions ? !state.savedDiscussions.includes(x) : state.myDiscussions;
  });
};

export const getSavedDiscussions = (state: DiscussionState) => {
  return state.savedDiscussions.filter(x => {
    return state.myDiscussions ? !state.myDiscussions.includes(x) : state.savedDiscussions;
  });
};

export const getNewestDiscussion = (state: DiscussionState) => state.newestDiscussion;