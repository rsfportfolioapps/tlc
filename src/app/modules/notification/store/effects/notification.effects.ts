import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NotificationActionTypes } from '../actions/notification.action';
import { Notification, NotificationPayloadCollection } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { Action } from '@ngrx/store';

@Injectable()
export class NotificationEffects {
  constructor(private actions$: Actions, private notificationService: NotificationService) { }

  @Effect()
  public loadNotification$: Observable<any> = this.actions$.pipe(
    ofType(NotificationActionTypes.LoadNotification),
    mergeMap((action: any) => zip(
      of([]),
      of([])
    ).pipe(
      map(([myNotification, notificationLibrary]) => {
        return {
          type: NotificationActionTypes.LoadNotificationSuccess,
          payload: this.formatResponse(myNotification, notificationLibrary)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myNotification?: Notification[],
    notificationLibrary?: Notification[]): NotificationPayloadCollection {
    return {
      myNotification,
      notificationLibrary
    };
  }
}
