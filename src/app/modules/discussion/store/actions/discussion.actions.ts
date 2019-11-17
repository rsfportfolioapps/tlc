import { Action } from '@ngrx/store';
import { DiscussionPayloadCollection } from '../effects/discussion.effects';
import { MyDiscussion } from '../../models/discussion.model';

export enum DiscussionActionTypes {
  LoadDiscussion = '[Load Discussion] Load Discussion',
  LoadDiscussionSuccess = '[Load Discussion] Load Discussion (success)',
  SaveDiscussion = '[Save Discussion] Save Discussion'
}

export class LoadDiscussion implements Action {
  readonly type = DiscussionActionTypes.LoadDiscussion;
}

export class LoadDiscussionSuccess implements Action {
  readonly type = DiscussionActionTypes.LoadDiscussionSuccess;

  constructor(public payload: any) { }
}

export class SaveDiscussion implements Action {
  readonly type = DiscussionActionTypes.SaveDiscussion;

  constructor(public payload: MyDiscussion) {}
}

export type DiscussionActions = LoadDiscussion | LoadDiscussionSuccess | SaveDiscussion;
