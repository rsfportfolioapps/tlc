import { Card } from '../../home/models/card.model';

export interface NewIdea extends Card {}

export interface NewIdeaQuestion {
  title?: string;
  note?: string;
  description?: string;
}