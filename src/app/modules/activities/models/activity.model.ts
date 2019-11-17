import { Card } from '../../home/models/card.model';

export interface Activity extends Card {
  uid?: number;
}
export interface ActivityPayloadCollection {
  myActivities?: Activity[];
}
