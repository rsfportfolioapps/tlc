import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { ProcessesDetailActionTypes } from '../actions/processes-detail.actions';
import { ProcessesDetailService } from '../../services/process-detail.service';
import { RecommendedProcess } from '../../models/processes-detail.model';

@Injectable()
export class ProcessDetailEffects {
  constructor(private actions$: Actions, private processDetailService: ProcessesDetailService) { }

  @Effect()
  public loadProcessesDetail$: Observable<any> = this.actions$.pipe(
    ofType(ProcessesDetailActionTypes.LoadProcessesDetail),
    mergeMap((action: any) => 
      this.processDetailService.getRecommendedProcess().pipe(
      map((recommendedProcesses) => {
        return {
          type: ProcessesDetailActionTypes.LoadProcessesDetailSuccess,
          payload: this.formatResponse(recommendedProcesses)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(recommendedProcesses?: RecommendedProcess[]) {
    return {
      recommendedProcesses
    }
  }
}