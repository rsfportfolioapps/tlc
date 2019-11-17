import { Action } from '@ngrx/store';

export enum DiscussionNewIdeaActionTypes {
  LoadDiscussionNewIdea= '[DiscussionNewIdea] Load DiscussionNewIdea',
  LoadDiscussionNewIdeaSuccess = '[DiscussionNewIdea] Load DiscussionNewIdea (success)'
}

export class LoadDiscussionNewIdea implements Action {
  readonly type = DiscussionNewIdeaActionTypes.LoadDiscussionNewIdea;
}

export class LoadDiscussionNewIdeaSuccess implements Action {
  readonly type = DiscussionNewIdeaActionTypes.LoadDiscussionNewIdeaSuccess;

  constructor(public payload: any) { }
}

export type DiscussionNewIdeaActions = LoadDiscussionNewIdea | LoadDiscussionNewIdeaSuccess;
