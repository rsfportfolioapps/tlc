import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProcessesActionTypes } from '../actions/processes.action';
import { Processes, ProcessesPayloadCollection } from '../../models/processes.model';
import { ProcessesService } from '../../services/processes.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ProcessesEffects {
  constructor(private actions$: Actions, private processesService: ProcessesService) { }

  @Effect()
  public loadProcesses$: Observable<any> = this.actions$.pipe(
    ofType(ProcessesActionTypes.LoadProcesses),
    mergeMap((action: any) => zip(
      this.processesService.getProcesses(),
      this.processesService.getProcessesLibraray()
    ).pipe(
      map(([myProcesses, processesLibrary]) => {
        return {
          type: ProcessesActionTypes.LoadProcessesSuccess,
          payload: this.formatResponse(myProcesses, processesLibrary)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myProcesses?: Processes[],
    processesLibrary?: Processes[]): ProcessesPayloadCollection {
    return {
      myProcesses,
      processesLibrary
    };
  }
}
