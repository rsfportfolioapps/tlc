import { Card } from '../../home/models/card.model';

export interface MyDiscussion extends Card {}

export enum DiscussionCategory {
  discussions = 1,
  saved = 2
}