import { Card } from '../../home/models/card.model';

export interface Processes extends Card {}

export enum ProcessesCategory {
  myprocesses = 1,
  library = 2
}

export interface ProcessesPayloadCollection {
  myProcesses?: Processes[];
  processesLibrary: Processes[];
}