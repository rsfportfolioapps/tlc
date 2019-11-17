import { Card } from '../../home/models/card.model';

export interface Learning extends Card {}

export enum LearningCategory {
  myLearning = 1,
  learnMore = 2
}

export enum LearningType {
  course = 1,
  channel = 2
}