import { Card } from '../../home/models/card.model';

export interface Rank extends Card { }

export interface BoardPayloadCollection {
  myRanks: Rank[];
}

export interface KnowledgePoints {
  id?: number;
  icon?: string;
  title?: string;
  date?: string;
}