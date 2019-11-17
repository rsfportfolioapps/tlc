import { Card } from '../../home/models/card.model';

export interface Board extends Card { 
  name?: string;
  class?: string
}

export interface BoardPayloadCollection {
  myBoardCards: Board[];
}
