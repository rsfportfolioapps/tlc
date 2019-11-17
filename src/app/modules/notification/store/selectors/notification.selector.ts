import { createSelector } from '@ngrx/store';
import * as fromNotification from '../reducers/notification.reducer';

export const NotificationSelectorState = (state) => state.notification;

export const getNotificationSelector = createSelector(
  NotificationSelectorState,
  fromNotification.getMyNotification
);
