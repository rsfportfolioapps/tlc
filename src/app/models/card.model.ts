import { Badges } from './badges.model';
import { Actions } from './actions.model';

export interface Card {
  id?: number;
  header?: string;
  imgUrl?: string;
  subHeader?: string;
  description?: string;
  subDescription?: string;
  longDescription?: string;
  dueDate?: string;
  content?: string;
  badges?: Badges[];
  actions?: Actions[];
}