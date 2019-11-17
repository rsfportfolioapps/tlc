import { Action } from '@ngrx/store';
import { NotificationPayloadCollection } from '../../models/notification.model';

export enum NotificationActionTypes {
  LoadNotification = '[Load Notification] Load Notification',
  LoadNotificationSuccess = '[Load Notification] Load Notification (success)'
}

export class LoadNotification implements Action {
  readonly type = NotificationActionTypes.LoadNotification;
}

export class LoadNotificationSuccess implements Action {
  readonly type = NotificationActionTypes.LoadNotificationSuccess;

  constructor(public payload: NotificationPayloadCollection) { }
}

export type NotificationActions = LoadNotification | LoadNotificationSuccess;
